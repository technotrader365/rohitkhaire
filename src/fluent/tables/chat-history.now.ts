import '@servicenow/sdk/global'
import { Table, StringColumn, IntegerColumn, BooleanColumn, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_1909902_geminiop_chat_history = Table({
  $id: Now.ID['chat_history_table'],
  name: 'x_1909902_geminiop_chat_history',
  label: 'Gemini-Ops Chat History',
  schema: {
    user: ReferenceColumn({
      referenceTable: 'sys_user',
      label: 'User'
    }),
    session_id: StringColumn({
      label: 'Session ID',
      maxLength: 40
    }),
    prompt: StringColumn({
      label: 'User Prompt',
      maxLength: 4000
    }),
    response_message: StringColumn({
      label: 'AI Response',
      maxLength: 8000
    }),
    thought_process: StringColumn({
      label: 'AI Thought Process',
      maxLength: 4000
    }),
    artifact_ref: StringColumn({
      label: 'Artifact Reference',
      maxLength: 40
    }),
    status: ChoiceColumn({
      label: 'Status',
      choices: {
        processing: { label: 'Processing', sequence: 0 },
        complete: { label: 'Complete', sequence: 1 },
        error: { label: 'Error', sequence: 2 }
      },
      defaultValue: 'processing'
    }),
    category: ChoiceColumn({
      label: 'Category',
      choices: {
        administration: { label: 'Administration', sequence: 0 },
        development: { label: 'Development', sequence: 1 },
        reporting: { label: 'Reporting', sequence: 2 },
        integration: { label: 'Integration', sequence: 3 },
        security: { label: 'Security', sequence: 4 },
        general: { label: 'General', sequence: 5 }
      }
    }),
    priority: ChoiceColumn({
      label: 'Priority',
      choices: {
        low: { label: 'Low', sequence: 0 },
        medium: { label: 'Medium', sequence: 1 },
        high: { label: 'High', sequence: 2 }
      },
      defaultValue: 'medium'
    }),
    skill_used: StringColumn({
      label: 'Skill Used',
      maxLength: 100
    }),
    execution_time: IntegerColumn({
      label: 'Execution Time (ms)'
    }),
    security_flag: BooleanColumn({
      label: 'Security Flag',
      defaultValue: false
    }),
    security_reason: StringColumn({
      label: 'Security Reason',
      maxLength: 255
    }),
    security_approved: BooleanColumn({
      label: 'Security Approved',
      defaultValue: false
    }),
    confidence_score: IntegerColumn({
      label: 'AI Confidence Score',
      min: 0,
      max: 100
    })
  }
})