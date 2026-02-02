import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Basic ServiceNow Management Skills - Simplified and Working Templates

// === USER MANAGEMENT ===
Record({
    $id: Now.ID['skill_user_mgmt'],
    table: 'x_1909902_geminiop_skill_registry',
    data: {
        name: 'User Management Operations',
        description: 'Complete user lifecycle management including creation, role assignment, and group management',
        category: 'administration',
        trigger_keywords: 'user,create user,add user,assign role,remove role,group membership,deactivate user',
        input_schema: JSON.stringify({
            action: 'string',
            user_name: 'string',
            first_name: 'string',
            last_name: 'string',
            email: 'string',
            role_name: 'string',
            group_name: 'string'
        }),
        code_template: `
// User Management Operations Template
var result = { success: false, message: '', sys_id: '' };

try {
    var user = new GlideRecord('sys_user');
    
    if (action === 'create') {
        user.initialize();
        user.user_name = user_name;
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.active = true;
        result.sys_id = user.insert();
        result.message = 'User created successfully';
        result.success = true;
    }
    
    if (action === 'assign_role') {
        if (user.get('user_name', user_name)) {
            var role = new GlideRecord('sys_user_role');
            if (role.get('name', role_name)) {
                var userRole = new GlideRecord('sys_user_has_role');
                userRole.initialize();
                userRole.user = user.sys_id;
                userRole.role = role.sys_id;
                userRole.insert();
                result.message = 'Role assigned successfully';
                result.success = true;
            }
        }
    }
} catch (ex) {
    result.message = 'Error: ' + ex.getMessage();
}

return result;`
    }
})

// === APPLICATION BUILDING ===
Record({
    $id: Now.ID['skill_app_builder'],
    table: 'x_1909902_geminiop_skill_registry',
    data: {
        name: 'Application Builder Suite',
        description: 'Create tables, forms, and business rules for ServiceNow applications',
        category: 'implementation',
        trigger_keywords: 'create table,new table,add field,business rule,workflow,form,list view,application,app development',
        input_schema: JSON.stringify({
            operation: 'string',
            table_name: 'string',
            table_label: 'string',
            rule_name: 'string'
        }),
        code_template: `
// Application Building Template
var result = { success: false, message: '', artifacts: [] };

try {
    if (operation === 'create_table') {
        var tableCreator = new GlideTableCreator(table_name, table_label);
        var tableId = tableCreator.create();
        result.artifacts.push({ type: 'table', sys_id: tableId, name: table_name });
        result.message = 'Table created successfully';
        result.success = true;
    }
    
    if (operation === 'create_business_rule') {
        var br = new GlideRecord('sys_script');
        br.initialize();
        br.name = rule_name;
        br.table = table_name;
        br.when = 'before';
        br.active = true;
        br.script = '// Auto-generated business rule\\n(function executeRule(current, previous) {\\n    // Add logic here\\n    gs.info("Business rule executed");\\n})(current, previous);';
        var brId = br.insert();
        result.artifacts.push({ type: 'business_rule', sys_id: brId, name: rule_name });
        result.message = 'Business rule created';
        result.success = true;
    }
} catch (ex) {
    result.message = 'Error: ' + ex.getMessage();
}

return result;`
    }
})

// === SERVICE PORTAL DEVELOPMENT ===
Record({
    $id: Now.ID['skill_portal_dev'],
    table: 'x_1909902_geminiop_skill_registry',
    data: {
        name: 'Service Portal Development',
        description: 'Create widgets and portal components',
        category: 'implementation',
        trigger_keywords: 'widget,portal,service portal,ui component,dashboard,page',
        input_schema: JSON.stringify({
            component_type: 'string',
            name: 'string',
            description: 'string'
        }),
        code_template: `
// Service Portal Development Template
var result = { success: false, message: '', component_id: '' };

try {
    if (component_type === 'widget') {
        var widget = new GlideRecord('sp_widget');
        widget.initialize();
        widget.name = name;
        widget.id = name.toLowerCase().replace(/[^a-z0-9]/g, '_');
        widget.description = description;
        
        widget.template = '<div class="widget"><h3>{{c.data.title}}</h3><p>{{c.data.message}}</p></div>';
        widget.client_script = 'function() { var c = this; c.data.title = "' + name + '"; c.data.message = "Widget created successfully"; }';
        widget.script = '(function() { data.title = "' + name + '"; })();';
        widget.css = '.widget { padding: 1rem; background: #f8f9fa; border-radius: 0.5rem; }';
        
        result.component_id = widget.insert();
        result.message = 'Widget created successfully';
        result.success = true;
    }
} catch (ex) {
    result.message = 'Error: ' + ex.getMessage();
}

return result;`
    }
})

// === DATA MANAGEMENT ===
Record({
    $id: Now.ID['skill_data_mgmt'],
    table: 'x_1909902_geminiop_skill_registry',
    data: {
        name: 'Data Management Operations',
        description: 'Data cleanup, reporting, and bulk operations',
        category: 'reporting',
        trigger_keywords: 'report,data,query,export,cleanup,bulk update',
        input_schema: JSON.stringify({
            operation: 'string',
            table: 'string',
            report_name: 'string'
        }),
        code_template: `
// Data Management Template
var result = { success: false, message: '', record_count: 0 };

try {
    if (operation === 'create_report') {
        var report = new GlideRecord('sys_report');
        report.initialize();
        report.title = report_name;
        report.table = table;
        report.type = 'list';
        report.field_list = 'number,sys_created_on,state';
        
        var reportId = report.insert();
        result.message = 'Report created successfully';
        result.success = true;
    }
    
    if (operation === 'data_cleanup') {
        var cleanup = new GlideRecord(table);
        cleanup.addQuery('active', false);
        cleanup.query();
        
        var count = 0;
        while (cleanup.next()) {
            cleanup.setValue('processed', true);
            cleanup.update();
            count++;
        }
        
        result.record_count = count;
        result.message = 'Processed ' + count + ' records';
        result.success = true;
    }
} catch (ex) {
    result.message = 'Error: ' + ex.getMessage();
}

return result;`
    }
})