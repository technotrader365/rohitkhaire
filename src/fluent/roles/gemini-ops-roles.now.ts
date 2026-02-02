import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

// Gemini-Ops User Role - Standard user access
export const gemini_ops_user = Role({
    name: 'x_1909902_geminiop.gemini_ops_user',
    description: 'Standard access to Gemini-Ops AI platform - can use chat interface and view own conversations',
    assignable_by: 'admin',
    can_delegate: false,
    grantable: true,
    elevated_privilege: false,
    scoped_admin: false
})

// Gemini-Ops Admin Role - Administrative access
export const gemini_ops_admin = Role({
    name: 'x_1909902_geminiop.gemini_ops_admin',
    description: 'Administrative access to Gemini-Ops platform - can manage skills, view analytics, and configure system settings',
    assignable_by: 'admin',
    can_delegate: true,
    grantable: true,
    elevated_privilege: true,
    scoped_admin: true,
    contains_roles: [gemini_ops_user]
})

// Gemini-Ops Developer Role - Development access
export const gemini_ops_developer = Role({
    name: 'x_1909902_geminiop.gemini_ops_developer',
    description: 'Developer access to Gemini-Ops platform - can create and modify skills, test AI capabilities',
    assignable_by: 'admin',
    can_delegate: false,
    grantable: true,
    elevated_privilege: false,
    scoped_admin: false,
    contains_roles: [gemini_ops_user]
})