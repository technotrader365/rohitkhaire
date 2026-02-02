import '@servicenow/sdk/global'
import { Property } from '@servicenow/sdk/core'

// Core API Configuration
Property({
  $id: Now.ID['gemini_api_key'],
  name: 'x_1909902_geminiop.api_key',
  description: 'Google Gemini API Key for AI integration',
  type: 'password',
  value: '',
  category: 'Gemini-Ops Configuration'
})

Property({
  $id: Now.ID['gemini_model_name'],
  name: 'x_1909902_geminiop.model_name',
  description: 'Gemini model to use for AI processing',
  type: 'string',
  value: 'gemini-1.5-pro',
  category: 'Gemini-Ops Configuration'
})

// System Behavior Properties
Property({
  $id: Now.ID['system_prompt'],
  name: 'x_1909902_geminiop.system_prompt',
  description: 'System instruction prompt for AI behavior',
  type: 'string',
  value: `You are Gemini-Ops, an advanced ServiceNow Platform Architect with comprehensive capabilities:

CORE FUNCTIONS:
1. Platform Administration - User/Group/Role management, ACLs, system configuration
2. Application Development - Tables, forms, workflows, business rules, client scripts
3. Service Portal Development - Widgets, pages, themes, components
4. Integration Services - REST APIs, web services, import sets, data transformation
5. Reporting & Analytics - Reports, dashboards, performance metrics, KPIs
6. Automation & Orchestration - Scheduled jobs, flows, event management
7. Security & Compliance - Security policies, audit trails, compliance reporting

RESPONSE FORMAT: Always return valid JSON:
{
  "thought": "Your reasoning and analysis",
  "action_type": "CRUD|SCRIPT|QUERY|ANALYSIS|CHAT",
  "confidence": 0.95,
  "payload": {
    "description": "What you're doing",
    "script": "Executable JavaScript (for SCRIPT)",
    "table": "Target table (for CRUD)",
    "operation": "insert|update|delete|query",
    "fields": {"field": "value"},
    "query_conditions": "encoded query string",
    "analysis_type": "performance|security|compliance"
  }
}

SAFETY RULES:
- Never delete system tables or critical data
- Always validate user permissions before operations
- Use try-catch blocks in all scripts
- Log all significant operations
- Provide clear feedback on actions taken`,
  category: 'Gemini-Ops Configuration'
})

Property({
  $id: Now.ID['max_retries'],
  name: 'x_1909902_geminiop.max_retries',
  description: 'Maximum API retry attempts',
  type: 'integer',
  value: '3',
  category: 'Gemini-Ops Configuration'
})

Property({
  $id: Now.ID['debug_mode'],
  name: 'x_1909902_geminiop.debug_mode',
  description: 'Enable debug logging and verbose output',
  type: 'boolean',
  value: 'false',
  category: 'Gemini-Ops Configuration'
})

Property({
  $id: Now.ID['auto_learn'],
  name: 'x_1909902_geminiop.auto_learn',
  description: 'Enable automatic skill learning from successful operations',
  type: 'boolean',
  value: 'true',
  category: 'Gemini-Ops Configuration'
})

Property({
  $id: Now.ID['skill_threshold'],
  name: 'x_1909902_geminiop.skill_threshold',
  description: 'Confidence threshold for skill matching (0.1 - 1.0)',
  type: 'string',
  value: '0.7',
  category: 'Gemini-Ops Configuration'
})

// Security and Access Control
Property({
  $id: Now.ID['allowed_scopes'],
  name: 'x_1909902_geminiop.allowed_scopes',
  description: 'Comma-separated list of scopes AI can operate in',
  type: 'string',
  value: 'x_1909902_geminiop,global',
  category: 'Gemini-Ops Security'
})

Property({
  $id: Now.ID['restricted_tables'],
  name: 'x_1909902_geminiop.restricted_tables',
  description: 'Tables that AI cannot modify (comma-separated)',
  type: 'string',
  value: 'sys_user_password,sys_encryption_key,sys_certificate',
  category: 'Gemini-Ops Security'
})

// Performance and Limits
Property({
  $id: Now.ID['query_limit'],
  name: 'x_1909902_geminiop.query_limit',
  description: 'Maximum records to return in queries',
  type: 'integer',
  value: '100',
  category: 'Gemini-Ops Performance'
})

Property({
  $id: Now.ID['execution_timeout'],
  name: 'x_1909902_geminiop.execution_timeout',
  description: 'Maximum script execution time (seconds)',
  type: 'integer',
  value: '30',
  category: 'Gemini-Ops Performance'
})