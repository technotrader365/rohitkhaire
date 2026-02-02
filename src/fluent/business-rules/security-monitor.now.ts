import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { securityMonitor, riskAssessment, approvalWorkflow } from '../../server/business-rules/security-monitor.js'

// Security Monitoring for High-Risk Operations
BusinessRule({
    $id: Now.ID['security_monitor'],
    name: 'Gemini-Ops Security Monitor',
    table: 'x_1909902_geminiop_chat_history',
    action: ['insert', 'update'],
    when: 'before',
    order: 100,
    active: true,
    script: securityMonitor
})

// Risk Assessment for Code Generation
BusinessRule({
    $id: Now.ID['risk_assessment'],
    name: 'AI Code Risk Assessment',
    table: 'x_1909902_geminiop_chat_history',
    action: ['insert'],
    when: 'after',
    order: 200,
    active: true,
    script: riskAssessment
})

// Approval Workflow Trigger
BusinessRule({
    $id: Now.ID['approval_workflow'],
    name: 'High-Risk Operation Approval',
    table: 'x_1909902_geminiop_chat_history',
    action: ['update'],
    when: 'async',
    order: 300,
    active: true,
    condition: 'current.risk_level == "high"',
    script: approvalWorkflow
})