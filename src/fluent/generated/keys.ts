import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    admin_section: {
                        table: 'sys_app_module'
                        id: '50a860c9b66040919f535bebeef434e5'
                    }
                    allowed_scopes: {
                        table: 'sys_properties'
                        id: 'b7ffc0e8171346f9bb6afd9fa49f168e'
                    }
                    analytics_module: {
                        table: 'sys_app_module'
                        id: '20b9dfe2849c443c9b9956eb8752342a'
                    }
                    'app.css': {
                        table: 'sys_ux_theme_asset'
                        id: '35d8efc4ba884a2ba9e31242f95eaca8'
                    }
                    approval_workflow: {
                        table: 'sys_script'
                        id: '4b7806c190cc4f97a5835552db4ed618'
                    }
                    auto_learn: {
                        table: 'sys_properties'
                        id: 'ad2f5890c251455b9be17ae1f481a330'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '3cc33ee7932045c8a7716007830702c6'
                    }
                    chat_auto_categorize: {
                        table: 'sys_script'
                        id: 'eb46fe54dfb740eb954a5ec24d85c1d2'
                    }
                    chat_history_module: {
                        table: 'sys_app_module'
                        id: '40037d24352842a2836932651a3b2798'
                    }
                    configuration_module: {
                        table: 'sys_app_module'
                        id: '211d5877c9074962811ceddeee693355'
                    }
                    data_section: {
                        table: 'sys_app_module'
                        id: 'ff929b8f859747078d239d3c30f79d15'
                    }
                    debug_mode: {
                        table: 'sys_properties'
                        id: 'f3da439614f54c0881499a63d2a2face'
                    }
                    documentation_module: {
                        table: 'sys_app_module'
                        id: '37726506fdef42fdb8c54970a3ee2226'
                    }
                    execution_timeout: {
                        table: 'sys_properties'
                        id: '6ae5562c68e642e0982068b718080bfd'
                    }
                    gemini_api_key: {
                        table: 'sys_properties'
                        id: '6c64f842b29040a2ad1847a4cca3533a'
                    }
                    gemini_model: {
                        table: 'sys_properties'
                        id: '387fa53677e141db8f1d62f01d16d8bb'
                        deleted: true
                    }
                    gemini_model_name: {
                        table: 'sys_properties'
                        id: 'f6981e2fbabc45daa1281e659326ecd6'
                    }
                    gemini_ops_console_module: {
                        table: 'sys_app_module'
                        id: '7fd5d7a064a54c01acb11fa75e196a89'
                    }
                    gemini_ops_main_menu: {
                        table: 'sys_app_application'
                        id: 'd8337e4189d64d668dcd0ec9715c16b7'
                    }
                    'gemini-ops-console': {
                        table: 'sys_ui_page'
                        id: 'ac34078cabcd4015a6b84870892c9869'
                    }
                    GeminiOpsOrchestrator: {
                        table: 'sys_script_include'
                        id: '3148dab2b1454684a1b78b347a4cbd2d'
                    }
                    max_history: {
                        table: 'sys_properties'
                        id: 'fa4bf74d34524382aa5d80716082be9a'
                        deleted: true
                    }
                    max_retries: {
                        table: 'sys_properties'
                        id: 'bdc70c700fc14ab3b0a36acbc16d0c87'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '0b70cb4344eb433a9bf8fcd5ed4fa627'
                    }
                    query_limit: {
                        table: 'sys_properties'
                        id: '1447075e186e4595bd887add730e12a7'
                    }
                    quick_actions_section: {
                        table: 'sys_app_module'
                        id: 'fa666505b53444849c8c63ad893c5ec4'
                    }
                    quick_create_table: {
                        table: 'sys_app_module'
                        id: '456bbc7c87994839b0fe5936ed1fb80e'
                    }
                    quick_create_user: {
                        table: 'sys_app_module'
                        id: 'c910e987539043d4bce6223837925224'
                    }
                    quick_create_widget: {
                        table: 'sys_app_module'
                        id: '2084683a5e2449009379f6471ea8153a'
                    }
                    restricted_tables: {
                        table: 'sys_properties'
                        id: '8c5e05cfeae24cdd9f04ad96e0693b72'
                    }
                    risk_assessment: {
                        table: 'sys_script'
                        id: '82f1200e53314556b25ba75dd3e82ec6'
                    }
                    security_monitor: {
                        table: 'sys_script'
                        id: 'a44b9fef6c7d4f85956e3a8b5fa9ebf2'
                    }
                    security_monitor_module: {
                        table: 'sys_app_module'
                        id: '19b0984ea67148bcbe2317b725d774ec'
                    }
                    skill_advanced_user_provisioning: {
                        table: 'x_1909902_geminiop_skill_registry'
                        id: 'd3fa815e792e4a499b82357efab7be8e'
                        deleted: true
                    }
                    skill_ai_report_generator: {
                        table: 'x_1909902_geminiop_skill_registry'
                        id: 'd9e236a171dc4094b33f83cca1f77e04'
                        deleted: true
                    }
                    skill_app_builder: {
                        table: 'x_1909902_geminiop_skill_registry'
                        id: '51cc89a03fdb443b91ba13af94e0a59c'
                    }
                    skill_business_rule: {
                        table: 'x_1909902_geminiop_skill_registry'
                        id: 'f5b0a7d8d6b74755bb8783b2dba888d7'
                        deleted: true
                    }
                    skill_data_mgmt: {
                        table: 'x_1909902_geminiop_skill_registry'
                        id: '907ec1bfba20490fafe6c0c5ce1eee4d'
                    }
                    skill_enterprise_app_builder: {
                        table: 'x_1909902_geminiop_skill_registry'
                        id: '1d79117d1a9840e5979e701e5ba16f07'
                        deleted: true
                    }
                    skill_portal_dev: {
                        table: 'x_1909902_geminiop_skill_registry'
                        id: '4d5cf2b3940743788d6e843808d507ba'
                    }
                    skill_portal_widget: {
                        table: 'x_1909902_geminiop_skill_registry'
                        id: '4dfacc7400eb47d7912839dd279ee17e'
                        deleted: true
                    }
                    skill_reporting: {
                        table: 'x_1909902_geminiop_skill_registry'
                        id: 'be9bad950e4749429586ac6899e7d209'
                        deleted: true
                    }
                    skill_rest_api: {
                        table: 'x_1909902_geminiop_skill_registry'
                        id: '713074e68c284a738af657f1f5ef34af'
                        deleted: true
                    }
                    skill_table_builder: {
                        table: 'x_1909902_geminiop_skill_registry'
                        id: 'c4370e2864384a9f880c7258c47a8bfa'
                        deleted: true
                    }
                    skill_threshold: {
                        table: 'sys_properties'
                        id: '4cb772a4577b4e33a21b8ceadba4da30'
                    }
                    skill_usage_tracker: {
                        table: 'sys_script'
                        id: '09a93a565277458fa9f2b60bff326846'
                    }
                    skill_user_management: {
                        table: 'x_1909902_geminiop_skill_registry'
                        id: '0f7b7bda82514bdf8168e038d3ce1547'
                        deleted: true
                    }
                    skill_user_mgmt: {
                        table: 'x_1909902_geminiop_skill_registry'
                        id: '5a378983cf9040bb8aba760d4a516316'
                    }
                    skills_registry_module: {
                        table: 'sys_app_module'
                        id: '5d3d5bd65fc54f4abc049ae8f316aebf'
                    }
                    'src_server_business-rules_chat-automation_js': {
                        table: 'sys_module'
                        id: 'd77412adc2ac4242970930d0f0bd230f'
                    }
                    'src_server_business-rules_security-monitor_js': {
                        table: 'sys_module'
                        id: '199fd2abd7c04096a0c8353630649bbc'
                    }
                    'src_server_script-includes_gemini-ops-orchestrator_js': {
                        table: 'sys_module'
                        id: '488383c284c84603bb919010fec77246'
                    }
                    system_prompt: {
                        table: 'sys_properties'
                        id: 'd48cf270c91949949b716bd67f8b74bb'
                    }
                    'x_1909902_geminiop/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'b0c2773d3d0c4e1cbb85481a01ebdec5'
                    }
                    'x_1909902_geminiop/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '98917005fcd040af81f280f620823492'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice_set'
                        id: '02568a71abf24a8b9406384915fef9b8'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '027b59c492434848b0723b8d2bc783f6'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '02a3db601f434445baedbb69e94d071c'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'security_flag'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '02da7910c1cc4dd185618329b8ff40ac'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'security_flag'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '03cec69424d341599d0a7957dc0bc7f8'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03d6c5b7ba2d4d289e87147b4b2a3dc0'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '03f7e0941cc44d409d508942ff9998d4'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'created_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0438fdbe041649479f3dbf2173800468'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '04ae42efd832486eaa9fa6fd9dd72462'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0662c6cd6a5d45928da5893e96fd18ee'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'status'
                            value: 'processing'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '07e94e3243a9480a8077bdfa5c086555'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'input_schema'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '08185368c4c9459c8139769639b096aa'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'usage_count'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '08f65e3220d64e8e93725fa235a06d89'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '0acdf29178fb4581b2ca1ca49d8e3810'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '12bab4a0d17c4385becf425dc7e22cda'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'status'
                            value: 'error'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14afacfb79614096a558a5318dbae788'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'artifact_ref'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '14b6f6741aa9444987204ab17c6b327f'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '157e4dc5294642ac9ee6254e8eeac374'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'category'
                            value: 'integration'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '161918a9f71544eeafcfe71b19d7d20e'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'category'
                            value: 'admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1bd26e067f44471a9b0ab634adaaaea1'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'thought_process'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '1e4810f169ab443daec629a634e1a6fc'
                        key: {
                            name: 'x_1909902_geminiop.gemini_ops_user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1f9ddada54794be485f16c285ad41923'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'trigger_keywords'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '1fe1d370254e4cd2b4a8594d1ce4a430'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '20be12f4d37d431aa7d1e24e43739bf1'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'prompt'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2246597d4d8e44b3ba922495263c9d26'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '23e702ab793c46c0a9485f93af23d68d'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'category'
                            value: 'development'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '24722a42f91e46b49abe908b6bf92c75'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'category'
                            value: 'administration'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '270788f9ab044e6cad129d60dc5d2b9d'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '27f4e8477848446e98affe02e938bead'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'requires_approval'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '286d82da33754021bd8f3e22ba69996b'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a754903e7fe4dd1a2b83d7854252d75'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'response_message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2a9df62b587a4f319463d32e976ce62d'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'category'
                            value: 'automation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2dd37a86d43244fc8ae579c2e7651ef7'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3192428d5c484a4587927d70b34e06f8'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'estimated_execution_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '33336fc28b4f451f846f097e987ad747'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '34163f66f67444658458e07d7c6deef2'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'status'
                            value: 'processing'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35bd4a8b53854dfbb2b4879f14d45fa9'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35dc19945d0346da8022cc04c9e0454f'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '36a9352e072f47fca5eb9597005da25f'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3701929df5ef48f8bb79bed9fd078e0e'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'complexity_level'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '39a8ebbc4fdf420a9c56dd3cf53f3253'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3b630e023de54e6485521c348738df4f'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'category'
                            value: 'general'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3bfa34fb3eea42c78f5ca4042bb22808'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '41441e98b759496285ace05a3555519e'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'thought_process'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43a3cba82c8e495ab0d4f4bd1ff92bdc'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'usage_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43c59b843eb345b393e4bfc3f4725134'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44ce3830bc5647e3b5e319067ccb00af'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'artifact_ref'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4512e747acc449c79636e6e721af08d8'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45eb4dd88a3f444fb079566afedda863'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b3979acd2714e43b95c0daba9131d85'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'usage_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c0d91150362412d89e971a874d4dad3'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'session_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f4cc4bc76a04bdc8ae826f31941a7b1'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'category'
                            value: 'security'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5019c87c5c364707bb11517ef898a46f'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '54487eb7fee348dcb9b3a9d893bdc7fd'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'category'
                            value: 'reporting'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '54c33528490b4b269d0b5a0759a101ef'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'trigger_keywords'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '55971ff22d0b4500ba9fa3810d52a25a'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'code_template'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '59fbf111368d434ab9327ece56253c43'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'status'
                            value: 'complete'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5b23e0e4c7d44846993f77f82ec4df6e'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'input_schema'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '5c20bf4cc1a54d50aaa9146d2edcf6e5'
                        key: {
                            name: 'x_1909902_geminiop.gemini_ops_admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5c702314c9c94f37b0d994197107306e'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'input_schema'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '61051a70516f4492995cff710a996378'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'artifact_ref'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6143ef5b7c974b009df70cc20a5d617e'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'confidence_score'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '622d38c72cb04ddab1dbeda960f0b803'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'complexity_level'
                            value: 'complex'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '62d64eaeff734b54a7f8e5c4f228ea2b'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'last_used'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '66d3062a51b84fc9a5841524ad5097cb'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'thought_process'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68dbe279b8c14554971b917941eed318'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6942e3cee6a44f1fb533d5d9539fcc90'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b5aade921ab4a65813acb3f89312469'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'complexity_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e0f391683d14febb513bdb588e72e7d'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'prompt'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6e4d73816300436fbdd70eba47bdfdd3'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'code_template'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6fc48f46c2ea4ff4b68357de865ff0fd'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'last_used'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7116648b1d3c49aaaa375d5586544798'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '71985838f1974cc38b92b6f9492d34c4'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '78ca2d9511c84578941a3756a6666a15'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'artifact_ref'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7bfaec3a320b4540a60d50457f710df9'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'category'
                            value: 'implementation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7cb753dc1c9c46f79d39d50b2361bc64'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7cb9bd0d7f8b4d1fb051af26f431689f'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'category'
                            value: 'reporting'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ed80535b5f0497d9cee118337d97453'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'created_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7f712e0f14dd45a698959d585816f016'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'category'
                            value: 'auto_generated'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '800d68ad5314407e99c56ddf3cb32905'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'user'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '81f58ebcf93e48fbaeaff5bc65af24b8'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'status'
                            value: 'complete'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '830815d950c940fd9de9500e1d2a2bb9'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'prompt'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '84a4b8234b3e485fa27561ae4e70695a'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'session_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '84bfe47ac240440590a0ac736a2e4163'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'usage_count'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '863d493c2094449687eb2734c69c7300'
                        key: {
                            role: {
                                id: 'd2c8f322939d430a806c98c20716bce3'
                                key: {
                                    name: 'x_1909902_geminiop.gemini_ops_developer'
                                }
                            }
                            contains: {
                                id: '1e4810f169ab443daec629a634e1a6fc'
                                key: {
                                    name: 'x_1909902_geminiop.gemini_ops_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '884cae74bcba4f1f8ed9373fac81121a'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8cf4f15c90d84ed8b4a3eb88b807237e'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'session_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f18108d77734763bf609be934829573'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'code_template'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '93bb813848ce4721b503d4a9b17098ea'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'complexity_level'
                            value: 'moderate'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9439016e80734f4f94bd77d2ad483107'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '95b1d683f8c841878682e23d600fa4dd'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'response_message'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96dd854f2ab64764918c0f275d11e684'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'response_message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9842c46111f6439bb7071eb4aed27f50'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'security_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '98e14f17c6084d20ab9788a623f0e82d'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9a347b65a91949ea9905a1ced7bedc45'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'priority'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9d5d0a1f520e496491b16dbbdfa86fc0'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'thought_process'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a48fb3c3f66747a1a904cc1783b15cc4'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'category'
                            value: 'implementation'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4b3dfa8941f41579f33e15a20a27057'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'category'
                            value: 'administration'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a6b28fcba9e449aabe20e460acad30f0'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'status'
                            value: 'error'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a70b267a54be40d0b1ed8ce07fb9748b'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'complexity_level'
                            value: 'expert'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'a854963fced94f959c4f7fd174018755'
                        key: {
                            role: {
                                id: '5c20bf4cc1a54d50aaa9146d2edcf6e5'
                                key: {
                                    name: 'x_1909902_geminiop.gemini_ops_admin'
                                }
                            }
                            contains: {
                                id: '1e4810f169ab443daec629a634e1a6fc'
                                key: {
                                    name: 'x_1909902_geminiop.gemini_ops_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a88c7f21fc7c441088918ca9ec048497'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ab3eb27420f447b29ea64704f9c6bf94'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'trigger_keywords'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac1661dd0960406f8542e9bc0c8355fa'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'security_approved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ace846c302ed4fc793f762723297b45f'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'execution_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'adb32b487ba543df8d2bbbc0275d407f'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'af17501fb86f46bc862336a790074684'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'security_approved'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b027d2846ce84ae39aa69caef7629dea'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'confidence_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b02d75c658bc4283ba471798d171918a'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b59af3e0d3644b8183ae620c0fe432f3'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'skill_used'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b93dd6e41b814c81ad4f7258456c188b'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'category'
                            value: 'bau'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb9e30ed5cc2489a9c82734aa32cef95'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbab3fba2e2b4aedb288e0720741eb45'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc560c915f1848b5ae22b3da00d76b23'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'estimated_execution_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bc94faf98cb049f1b859bbffcfc1c49d'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'priority'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'be7863599bc246208b70605138e5ef14'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'execution_time'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c00e3d9013274c7a9dfa827ce7a6d597'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'complexity_level'
                            value: 'simple'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c3a0ac8626054369ab0d61d875239066'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'requires_approval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c5be2f2607b34beab9d5b5c3a03e5758'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'session_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c7cf1e51ccdf4201ae8d75755a63cae1'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'security_reason'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c9bb0f20ef6c4b49beedce644c15abbd'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ca57b0059d2243429bc29b8bc3d202eb'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'input_schema'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cccd99849b3e4b0d9689b0ea40121ec2'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'category'
                            value: 'reporting'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cee9765b9fc4455292669f01611eba86'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'code_template'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0943dbca6804a57ae186c8785924fd9'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'created_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0b7001c224246afa71289aa71939780'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'd2c8f322939d430a806c98c20716bce3'
                        key: {
                            name: 'x_1909902_geminiop.gemini_ops_developer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd6f295357b4c48c0abee2af5f0a65029'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'success_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd709fca711e344c68d35210f9bf873c4'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd7e70f5764ca490e8830602c17e45f42'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd92b60f682384689bbd2192aef0df9e0'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'category'
                            value: 'integration'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db51558b4b7642ed86fc6222b41b5cb1'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'success_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'df5515cdbeda42079cc207c68a1790c3'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'category'
                            value: 'bau'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dfdf18b07eff4e5faf3f51159c97cc31'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e1b97bc6cc29415ea852b9c88626f32c'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'priority'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e400fc62e074419d8ff91a7cf1cdaedd'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e4029bfab61c4128b16ae74b3a77fa38'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e4cf9d4ae0124fc9891ce51f2773bdd4'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'trigger_keywords'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5a929829995497198a70e1249050bd5'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea9a2ca91e854220922680057008e512'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'last_used'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ead630b7d9484844830d7908ae17c054'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ec974dcf03934fa19f6ade19d348492a'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'response_message'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ecd671cdb0054a30acde0636a298579f'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'last_used'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee2509b01b974bf3b395ecf5958b787e'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_chat'
                            element: 'user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f2d1c39e9dd542728cf0c1ff54493961'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'skill_used'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f3c65978f42d475ca935bdc5e324294e'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f5906f4352c24de6b084cf7540379460'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'category'
                            value: 'security'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f65bb1941a834618b865eb6ae70a5d7b'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'complexity_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f6e1c04af4ea41ae8f752deff651e2b4'
                        deleted: true
                        key: {
                            name: 'x_1909902_geminiop_skill'
                            element: 'created_by'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fafb2ccd9035440daa41a8a83c4077d4'
                        key: {
                            name: 'x_1909902_geminiop_skill_registry'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd16e65c671144adad83bc09a103b7c4'
                        key: {
                            name: 'x_1909902_geminiop_chat_history'
                            element: 'prompt'
                        }
                    },
                ]
            }
        }
    }
}
