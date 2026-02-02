import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide'

/**
 * Chat message auto-categorization logic
 */
export function autoCategorizeChat(current, previous) {
  // Auto-categorize chat messages based on keywords
  const prompt = current.prompt.toString().toLowerCase();
  
  if (prompt.match(/(user|group|role|permission|access)/)) {
    current.category = 'administration';
  } else if (prompt.match(/(table|field|form|widget|portal)/)) {
    current.category = 'development';
  } else if (prompt.match(/(report|chart|dashboard|analytics)/)) {
    current.category = 'reporting';
  } else if (prompt.match(/(integration|api|rest|import)/)) {
    current.category = 'integration';
  } else if (prompt.match(/(security|audit|compliance|policy)/)) {
    current.category = 'security';
  } else {
    current.category = 'general';
  }
  
  // Auto-assign priority
  if (prompt.match(/(urgent|critical|emergency|asap)/)) {
    current.priority = 'high';
  } else if (prompt.match(/(quick|simple|easy)/)) {
    current.priority = 'low';
  } else {
    current.priority = 'medium';
  }
}

/**
 * Skill usage tracking logic
 */
export function trackSkillUsage(current, previous) {
  if (current.skill_used.changes() && current.skill_used.toString()) {
    // Update skill usage statistics
    const skillGR = new GlideRecord('x_1909902_geminiop_skill_registry');
    if (skillGR.get('name', current.skill_used.toString())) {
      const currentUsage = parseInt(skillGR.usage_count.toString()) || 0;
      skillGR.usage_count = currentUsage + 1;
      skillGR.last_used = new GlideDateTime();
      
      // Update success rate
      if (current.status.toString() === 'complete') {
        const currentSuccess = parseInt(skillGR.success_count.toString()) || 0;
        skillGR.success_count = currentSuccess + 1;
      }
      
      skillGR.update();
    }
  }
}

/**
 * Security monitoring logic
 */
export function monitorSecurity(current, previous) {
  const prompt = current.prompt.toString().toLowerCase();
  
  // Flag potentially dangerous operations
  const dangerousPatterns = [
    'delete.*sys_',
    'drop.*table',
    'truncate',
    'eval.*user.*input',
    'password.*plain',
    'admin.*bypass'
  ];
  
  for (const pattern of dangerousPatterns) {
    if (new RegExp(pattern).test(prompt)) {
      current.security_flag = true;
      current.security_reason = 'Potentially dangerous operation detected: ' + pattern;
      gs.addErrorMessage('Security warning: This operation has been flagged for review');
      break;
    }
  }
  
  // Auto-approve safe operations
  const safePatterns = [
    'create.*widget',
    'add.*user.*group',
    'generate.*report',
    'query.*incident',
    'show.*dashboard'
  ];
  
  for (const pattern of safePatterns) {
    if (new RegExp(pattern).test(prompt)) {
      current.security_approved = true;
      break;
    }
  }
}