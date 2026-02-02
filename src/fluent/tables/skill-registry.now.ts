import '@servicenow/sdk/global'
import { Table, StringColumn, IntegerColumn, DateTimeColumn, BooleanColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_1909902_geminiop_skill_registry = Table({
  $id: Now.ID['skill_registry_table'],
  name: 'x_1909902_geminiop_skill_registry',
  label: 'Gemini-Ops Skill Registry',
  schema: {
    name: StringColumn({
      label: 'Skill Name',
      maxLength: 100,
      unique: true
    }),
    description: StringColumn({
      label: 'Description',
      maxLength: 1000
    }),
    category: ChoiceColumn({
      label: 'Category',
      choices: {
        administration: { label: 'Administration', sequence: 0 },
        implementation: { label: 'Implementation', sequence: 1 },
        bau: { label: 'BAU Operations', sequence: 2 },
        reporting: { label: 'Reporting', sequence: 3 },
        integration: { label: 'Integration', sequence: 4 },
        security: { label: 'Security', sequence: 5 },
        auto_generated: { label: 'Auto Generated', sequence: 6 }
      }
    }),
    trigger_keywords: StringColumn({
      label: 'Trigger Keywords',
      maxLength: 500
    }),
    input_schema: StringColumn({
      label: 'Input Schema (JSON)',
      maxLength: 2000
    }),
    code_template: StringColumn({
      label: 'Code Template',
      maxLength: 8000
    }),
    usage_count: IntegerColumn({
      label: 'Usage Count',
      defaultValue: 0
    }),
    success_count: IntegerColumn({
      label: 'Success Count',
      defaultValue: 0
    }),
    last_used: DateTimeColumn({
      label: 'Last Used'
    }),
    active: BooleanColumn({
      label: 'Active',
      defaultValue: true
    }),
    complexity_level: ChoiceColumn({
      label: 'Complexity Level',
      choices: {
        simple: { label: 'Simple', sequence: 0 },
        moderate: { label: 'Moderate', sequence: 1 },
        complex: { label: 'Complex', sequence: 2 },
        expert: { label: 'Expert', sequence: 3 }
      },
      defaultValue: 'moderate'
    }),
    estimated_execution_time: IntegerColumn({
      label: 'Estimated Execution Time (seconds)',
      defaultValue: 5
    }),
    requires_approval: BooleanColumn({
      label: 'Requires Approval',
      defaultValue: false
    })
  }
})