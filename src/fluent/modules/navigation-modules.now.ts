import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'

// Create Main Application Menu
export const geminiOpsMenu = ApplicationMenu({
    $id: Now.ID['gemini_ops_main_menu'],
    title: 'Gemini-Ops',
    hint: 'AI-powered ServiceNow development and platform management',
    description: 'Autonomous Builder Agent for ServiceNow platform operations',
    active: true,
    order: 100
})

// Main Console Module
Record({
    $id: Now.ID['gemini_ops_console_module'],
    table: 'sys_app_module',
    data: {
        title: '🚀 AI Console',
        application: geminiOpsMenu.$id,
        link_type: 'DIRECT',
        query: 'x_1909902_geminiop_gemini_ops_console.do',
        hint: 'Main AI chat interface for platform management',
        active: true,
        order: 100
    }
})

// Data Management Section
Record({
    $id: Now.ID['data_section'],
    table: 'sys_app_module',
    data: {
        title: '📊 Data & Analytics',
        application: geminiOpsMenu.$id,
        link_type: 'SEPARATOR',
        active: true,
        order: 200
    }
})

// Chat History Module
Record({
    $id: Now.ID['chat_history_module'],
    table: 'sys_app_module',
    data: {
        title: 'Chat History',
        application: geminiOpsMenu.$id,
        link_type: 'LIST',
        name: 'x_1909902_geminiop_chat_history',
        hint: 'View and manage AI conversation logs',
        active: true,
        order: 210
    }
})

// Skills Registry Module
Record({
    $id: Now.ID['skills_registry_module'],
    table: 'sys_app_module',
    data: {
        title: 'Skills Registry',
        application: geminiOpsMenu.$id,
        link_type: 'LIST',
        name: 'x_1909902_geminiop_skill_registry',
        hint: 'Manage AI capabilities and learned skills',
        active: true,
        order: 220
    }
})

// Analytics Dashboard Module
Record({
    $id: Now.ID['analytics_module'],
    table: 'sys_app_module',
    data: {
        title: 'Analytics Dashboard',
        application: geminiOpsMenu.$id,
        link_type: 'DIRECT',
        query: 'x_1909902_geminiop_gemini_ops_console.do?view=analytics',
        hint: 'Performance metrics and usage analytics',
        active: true,
        order: 230
    }
})

// Administration Section
Record({
    $id: Now.ID['admin_section'],
    table: 'sys_app_module',
    data: {
        title: '🛡️ Administration',
        application: geminiOpsMenu.$id,
        link_type: 'SEPARATOR',
        active: true,
        order: 300
    }
})

// Security Monitor Module
Record({
    $id: Now.ID['security_monitor_module'],
    table: 'sys_app_module',
    data: {
        title: 'Security Monitor',
        application: geminiOpsMenu.$id,
        link_type: 'DIRECT',
        query: 'x_1909902_geminiop_gemini_ops_console.do?view=security',
        hint: 'Security alerts and audit logs',
        active: true,
        order: 310
    }
})

// Configuration Module
Record({
    $id: Now.ID['configuration_module'],
    table: 'sys_app_module',
    data: {
        title: 'Configuration',
        application: geminiOpsMenu.$id,
        link_type: 'LIST',
        name: 'sys_properties',
        query: 'nameLIKEx_1909902_geminiop',
        hint: 'System properties and AI settings',
        active: true,
        order: 320
    }
})

// Quick Actions Section
Record({
    $id: Now.ID['quick_actions_section'],
    table: 'sys_app_module',
    data: {
        title: '⚡ Quick Actions',
        application: geminiOpsMenu.$id,
        link_type: 'SEPARATOR',
        active: true,
        order: 400
    }
})

// Create Table Quick Action
Record({
    $id: Now.ID['quick_create_table'],
    table: 'sys_app_module',
    data: {
        title: '📋 Create Table',
        application: geminiOpsMenu.$id,
        link_type: 'DIRECT',
        query: 'x_1909902_geminiop_gemini_ops_console.do?prompt=Create%20a%20new%20table',
        hint: 'Quickly create a new table with AI assistance',
        active: true,
        order: 410
    }
})

// Create User Quick Action
Record({
    $id: Now.ID['quick_create_user'],
    table: 'sys_app_module',
    data: {
        title: '👤 Create User',
        application: geminiOpsMenu.$id,
        link_type: 'DIRECT',
        query: 'x_1909902_geminiop_gemini_ops_console.do?prompt=Create%20a%20new%20user%20account',
        hint: 'Quickly create a new user with AI assistance',
        active: true,
        order: 420
    }
})

// Create Widget Quick Action
Record({
    $id: Now.ID['quick_create_widget'],
    table: 'sys_app_module',
    data: {
        title: '🎨 Create Widget',
        application: geminiOpsMenu.$id,
        link_type: 'DIRECT',
        query: 'x_1909902_geminiop_gemini_ops_console.do?prompt=Create%20a%20service%20portal%20widget',
        hint: 'Quickly create a service portal widget with AI',
        active: true,
        order: 430
    }
})

// Documentation Module
Record({
    $id: Now.ID['documentation_module'],
    table: 'sys_app_module',
    data: {
        title: '📚 Documentation',
        application: geminiOpsMenu.$id,
        link_type: 'HTML',
        query: '<h2>Gemini-Ops Documentation</h2><p>Welcome to the AI-powered ServiceNow development platform!</p><h3>Getting Started</h3><ul><li>Access the AI Console to start chatting</li><li>Use natural language to describe what you want to build</li><li>Review generated code before execution</li><li>Monitor security alerts and approvals</li></ul><h3>Examples</h3><ul><li>"Create a table for asset management"</li><li>"Add user John Doe to IT group"</li><li>"Build a widget for incident dashboard"</li></ul>',
        hint: 'User guides and getting started information',
        active: true,
        order: 500
    }
})