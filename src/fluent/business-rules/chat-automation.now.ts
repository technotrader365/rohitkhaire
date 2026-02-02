import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { autoCategorizeChat, trackSkillUsage, monitorSecurity } from '../../server/business-rules/chat-automation.js'

// Auto-categorization of chat messages
BusinessRule({
  $id: Now.ID['chat_auto_categorize'],
  name: 'Gemini-Ops Chat Auto-Categorize',
  table: 'x_1909902_geminiop_chat_history',
  when: 'before',
  action: ['insert'],
  active: true,
  script: autoCategorizeChat
})

// Skill usage tracking
BusinessRule({
  $id: Now.ID['skill_usage_tracker'],
  name: 'Gemini-Ops Skill Usage Tracker',
  table: 'x_1909902_geminiop_chat_history',
  when: 'after',
  action: ['update'],
  active: true,
  script: trackSkillUsage
})

// Security monitoring
BusinessRule({
  $id: Now.ID['security_monitor'],
  name: 'Gemini-Ops Security Monitor',
  table: 'x_1909902_geminiop_chat_history',
  when: 'before',
  action: ['insert', 'update'],
  active: true,
  script: monitorSecurity
})