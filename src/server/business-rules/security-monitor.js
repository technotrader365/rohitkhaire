import { gs, GlideDateTime, GlideRecord } from '@servicenow/glide'

/**
 * Security Monitor - Analyzes AI operations for security risks
 */
export function securityMonitor(current, previous) {
    try {
        const prompt = current.getValue('user_prompt') || '';
        const response = current.getValue('ai_response') || '';
        
        // Security Risk Patterns
        const highRiskPatterns = [
            /delete\s+from\s+/i,
            /drop\s+table/i,
            /sys_user_role/i,
            /admin\s+role/i,
            /elevate\s+privilege/i,
            /bypass\s+acl/i,
            /GlideScopedEvaluator/i,
            /executeScript/i,
            /global\s+scope/i,
            /sys_properties/i
        ];
        
        const mediumRiskPatterns = [
            /create\s+table/i,
            /business\s+rule/i,
            /script\s+include/i,
            /ui\s+action/i,
            /workflow/i,
            /scheduled\s+job/i,
            /bulk\s+update/i,
            /mass\s+delete/i
        ];
        
        // Assess Risk Level
        let riskLevel = 'low';
        let riskFactors = [];
        
        for (let pattern of highRiskPatterns) {
            if (pattern.test(prompt) || pattern.test(response)) {
                riskLevel = 'high';
                riskFactors.push('High-privilege operation detected');
                break;
            }
        }
        
        if (riskLevel !== 'high') {
            for (let pattern of mediumRiskPatterns) {
                if (pattern.test(prompt) || pattern.test(response)) {
                    riskLevel = 'medium';
                    riskFactors.push('System modification operation');
                    break;
                }
            }
        }
        
        // Check for suspicious patterns
        if (prompt.toLowerCase().includes('password') && prompt.toLowerCase().includes('reset')) {
            riskLevel = 'high';
            riskFactors.push('Password manipulation detected');
        }
        
        if (prompt.toLowerCase().includes('admin') && prompt.toLowerCase().includes('create')) {
            riskLevel = 'high';
            riskFactors.push('Admin user creation detected');
        }
        
        // Set risk assessment fields
        current.setValue('risk_level', riskLevel);
        current.setValue('risk_factors', riskFactors.join(', '));
        
        // Log security events
        if (riskLevel === 'high') {
            gs.warn('GEMINI-OPS SECURITY: High-risk operation detected - User: ' + 
                   current.getValue('user') + ', Risk: ' + riskFactors.join(', '));
        }
        
    } catch (ex) {
        gs.error('Security Monitor Error: ' + ex.getMessage());
    }
}

/**
 * Risk Assessment - Detailed analysis after AI response
 */
export function riskAssessment(current, previous) {
    try {
        const aiResponse = current.getValue('ai_response') || '';
        const riskLevel = current.getValue('risk_level') || 'low';
        
        // Enhanced risk analysis based on AI response content
        const analysisResult = {
            codeComplexity: 'low',
            dataAccess: 'read-only',
            systemImpact: 'minimal',
            privileges: 'standard'
        };
        
        // Analyze code complexity
        if (aiResponse.includes('GlideRecord') && aiResponse.includes('insert')) {
            analysisResult.codeComplexity = 'medium';
            analysisResult.dataAccess = 'write';
        }
        
        if (aiResponse.includes('GlideScopedEvaluator')) {
            analysisResult.codeComplexity = 'high';
            analysisResult.systemImpact = 'significant';
        }
        
        // Check for privilege escalation
        if (aiResponse.includes('sys_user_role') || aiResponse.includes('admin')) {
            analysisResult.privileges = 'elevated';
            analysisResult.systemImpact = 'high';
        }
        
        // Store detailed assessment
        current.setValue('security_analysis', JSON.stringify(analysisResult));
        
        // Create audit record for high-risk operations
        if (riskLevel === 'high') {
            const audit = new GlideRecord('x_1909902_geminiop_security_audit');
            audit.initialize();
            audit.setValue('chat_record', current.sys_id);
            audit.setValue('user', current.getValue('user'));
            audit.setValue('operation_type', 'ai_code_generation');
            audit.setValue('risk_level', riskLevel);
            audit.setValue('analysis', JSON.stringify(analysisResult));
            audit.setValue('timestamp', new GlideDateTime());
            audit.insert();
        }
        
    } catch (ex) {
        gs.error('Risk Assessment Error: ' + ex.getMessage());
    }
}

/**
 * Approval Workflow - Triggers approval process for high-risk operations
 */
export function approvalWorkflow(current, previous) {
    try {
        const riskLevel = current.getValue('risk_level');
        
        if (riskLevel === 'high') {
            // Create approval request
            const approval = new GlideRecord('sysapproval_approver');
            approval.initialize();
            approval.setValue('document_id', current.sys_id);
            approval.setValue('source_table', 'x_1909902_geminiop_chat_history');
            approval.setValue('approver', getSecurityApprover());
            approval.setValue('state', 'requested');
            approval.setValue('comments', 'High-risk AI operation requires security review');
            approval.insert();
            
            // Suspend execution until approved
            current.setValue('execution_status', 'pending_approval');
            current.setValue('approval_request', approval.sys_id);
            current.update();
            
            // Notify security team
            gs.eventQueue('gemini.ops.approval.required', current, current.getValue('user'), approval.sys_id);
        }
        
    } catch (ex) {
        gs.error('Approval Workflow Error: ' + ex.getMessage());
    }
}

/**
 * Get designated security approver
 */
function getSecurityApprover() {
    // Default to admin user, in practice this would be configurable
    const securityGroup = new GlideRecord('sys_user_group');
    if (securityGroup.get('name', 'security')) {
        const members = new GlideRecord('sys_user_grmember');
        members.addQuery('group', securityGroup.sys_id);
        members.query();
        if (members.next()) {
            return members.getValue('user');
        }
    }
    
    // Fallback to admin
    const admin = new GlideRecord('sys_user');
    admin.addQuery('user_name', 'admin');
    admin.query();
    if (admin.next()) {
        return admin.sys_id;
    }
    
    return gs.getUserID(); // Current user as fallback
}