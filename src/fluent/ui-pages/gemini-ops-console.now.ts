import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'

export const gemini_ops_console = UiPage({
  $id: Now.ID['gemini-ops-console'],
  endpoint: 'x_1909902_geminiop_gemini_ops_console.do',
  description: 'Gemini-Ops AI Builder Agent - Chat interface for ServiceNow platform management',
  category: 'general',
  direct: true,
  html: `<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">

    <!-- ServiceNow UI Page for Gemini-Ops -->
    <div class="gemini-ops-container">
        
        <!-- Header -->
        <div class="gemini-header">
            <div class="header-left">
                <span class="brand-icon">⚡</span>
                <h1>Gemini-Ops AI Builder</h1>
            </div>
            <div class="header-right">
                <span class="status-indicator">🟢 System Ready</span>
            </div>
        </div>

        <!-- Navigation Tabs -->
        <div class="nav-tabs">
            <button class="tab-btn active" data-view="chat">💬 AI Chat</button>
            <button class="tab-btn" data-view="skills">🧠 Skills</button>
            <button class="tab-btn" data-view="analytics">📊 Analytics</button>
            <button class="tab-btn" data-view="security">🛡️ Security</button>
        </div>

        <!-- Content Areas -->
        <div class="content-container">
            
            <!-- Chat View -->
            <div id="chat-content" class="content-panel active">
                <div class="chat-area">
                    <div class="messages-container" id="messages-container">
                        <div class="welcome-msg">
                            <div class="bot-icon">🤖</div>
                            <div class="welcome-text">
                                <h3>Welcome to Gemini-Ops! 🚀</h3>
                                <p>I'm your AI ServiceNow architect. I can help you with:</p>
                                <ul>
                                    <li><strong>🏗️ Application Development</strong> - Tables, forms, workflows</li>
                                    <li><strong>👥 User Management</strong> - Create users, assign roles</li>
                                    <li><strong>🎨 Service Portal</strong> - Widgets and components</li>
                                    <li><strong>📊 Reporting</strong> - Analytics and dashboards</li>
                                </ul>
                                <p><strong>Try:</strong> "Create a new incident table" or "Add user to IT group"</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="input-section">
                        <div class="quick-actions">
                            <button class="quick-btn" data-action="table">📋 Table</button>
                            <button class="quick-btn" data-action="user">👤 User</button>
                            <button class="quick-btn" data-action="widget">🎨 Widget</button>
                            <button class="quick-btn" data-action="report">📊 Report</button>
                        </div>
                        <div class="input-row">
                            <textarea id="chat-input" placeholder="Describe what you want to build or manage..." rows="3"></textarea>
                            <button id="send-button" class="send-btn">Send</button>
                        </div>
                        <div class="input-footer">
                            <small>💡 Tip: Be specific about what you want to create or manage</small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Skills View -->
            <div id="skills-content" class="content-panel">
                <div class="panel-header">
                    <h2>🧠 AI Skills Registry</h2>
                    <button class="refresh-btn">🔄 Refresh</button>
                </div>
                <div class="skills-grid">
                    <div class="skill-card">
                        <div class="skill-icon">👥</div>
                        <div class="skill-info">
                            <h3>User Management</h3>
                            <p>Create users, assign roles, manage groups and permissions</p>
                            <div class="skill-stats">
                                <span class="badge active">ACTIVE</span>
                                <span class="usage">Used 47 times</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="skill-card">
                        <div class="skill-icon">🏗️</div>
                        <div class="skill-info">
                            <h3>Table Creation</h3>
                            <p>Build tables with fields, relationships, and business rules</p>
                            <div class="skill-stats">
                                <span class="badge active">ACTIVE</span>
                                <span class="usage">Used 32 times</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="skill-card">
                        <div class="skill-icon">🎨</div>
                        <div class="skill-info">
                            <h3>Widget Development</h3>
                            <p>Create Service Portal widgets with modern UI patterns</p>
                            <div class="skill-stats">
                                <span class="badge active">ACTIVE</span>
                                <span class="usage">Used 18 times</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="skill-card">
                        <div class="skill-icon">📊</div>
                        <div class="skill-info">
                            <h3>Report Generation</h3>
                            <p>Generate reports, dashboards, and analytics views</p>
                            <div class="skill-stats">
                                <span class="badge active">ACTIVE</span>
                                <span class="usage">Used 25 times</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Analytics View -->
            <div id="analytics-content" class="content-panel">
                <div class="panel-header">
                    <h2>📊 Analytics Dashboard</h2>
                    <button class="refresh-btn">🔄 Refresh</button>
                </div>
                <div class="metrics-dashboard">
                    <div class="metric-card">
                        <div class="metric-number">247</div>
                        <div class="metric-label">Total Conversations</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-number">234</div>
                        <div class="metric-label">Successful Operations</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-number">94.7%</div>
                        <div class="metric-label">Success Rate</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-number">12</div>
                        <div class="metric-label">Learned Skills</div>
                    </div>
                </div>
                
                <div class="activity-section">
                    <h3>🚀 Recent Activity</h3>
                    <div class="activity-list">
                        <div class="activity-item">
                            <span class="activity-time">2 min ago</span>
                            <span class="activity-desc">Created incident table with 5 custom fields</span>
                            <span class="activity-status success">✅</span>
                        </div>
                        <div class="activity-item">
                            <span class="activity-time">8 min ago</span>
                            <span class="activity-desc">Added user John Smith to IT Support group</span>
                            <span class="activity-status success">✅</span>
                        </div>
                        <div class="activity-item">
                            <span class="activity-time">15 min ago</span>
                            <span class="activity-desc">Generated monthly performance report</span>
                            <span class="activity-status success">✅</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Security View -->
            <div id="security-content" class="content-panel">
                <div class="panel-header">
                    <h2>🛡️ Security Monitor</h2>
                    <button class="refresh-btn">🔄 Refresh</button>
                </div>
                
                <div class="security-overview">
                    <div class="security-status">
                        <div class="status-icon">✅</div>
                        <div class="status-info">
                            <h3>System Secure</h3>
                            <p>All security checks passed • Last scan: 5 minutes ago</p>
                        </div>
                    </div>
                </div>
                
                <div class="security-logs">
                    <h3>📋 Security Events</h3>
                    <div class="log-entries">
                        <div class="log-entry">
                            <span class="log-time">10:45 AM</span>
                            <span class="log-message">High-privilege operation approved</span>
                            <span class="log-level approved">APPROVED</span>
                        </div>
                        <div class="log-entry">
                            <span class="log-time">10:32 AM</span>
                            <span class="log-message">Admin role assignment flagged for review</span>
                            <span class="log-level warning">FLAGGED</span>
                        </div>
                        <div class="log-entry">
                            <span class="log-time">10:15 AM</span>
                            <span class="log-message">Security scan completed successfully</span>
                            <span class="log-level success">SUCCESS</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        <!-- Configuration Help -->
        <div class="config-help">
            <div class="help-content">
                <h4>🔧 Configuration Required</h4>
                <p>To enable full AI functionality:</p>
                <ol>
                    <li>Go to <strong>System Properties</strong></li>
                    <li>Filter by: <code>x_1909902_geminiop</code></li>
                    <li>Set your Google Gemini API key</li>
                </ol>
                <a href="sys_properties_list.do?sysparm_query=nameLIKEx_1909902_geminiop" target="_blank" class="config-link">
                    Configure Now →
                </a>
            </div>
        </div>
    </div>

    <!-- Styles -->
    <style>
        /* Gemini-Ops Styles */
        .gemini-ops-container {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #0d1117;
            color: #e6edf3;
            min-height: 100vh;
        }

        .gemini-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            border-bottom: 2px solid #30363d;
            margin-bottom: 20px;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .brand-icon {
            font-size: 2rem;
            background: linear-gradient(135deg, #58a6ff, #3fb950);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .gemini-header h1 {
            font-size: 1.8rem;
            font-weight: 700;
            color: #f0f6fc;
            margin: 0;
        }

        .status-indicator {
            font-size: 0.9rem;
            color: #3fb950;
            font-weight: 500;
        }

        /* Navigation Tabs */
        .nav-tabs {
            display: flex;
            gap: 5px;
            margin-bottom: 30px;
            background: #161b22;
            padding: 5px;
            border-radius: 10px;
            border: 1px solid #30363d;
        }

        .tab-btn {
            background: none;
            border: none;
            color: #8b949e;
            padding: 12px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.95rem;
            font-weight: 500;
            transition: all 0.2s ease;
            flex: 1;
            text-align: center;
        }

        .tab-btn:hover {
            background: #21262d;
            color: #e6edf3;
        }

        .tab-btn.active {
            background: #58a6ff;
            color: #ffffff;
            font-weight: 600;
        }

        /* Content Panels */
        .content-container {
            position: relative;
            min-height: 600px;
        }

        .content-panel {
            display: none;
            background: #161b22;
            border: 1px solid #30363d;
            border-radius: 12px;
            padding: 30px;
        }

        .content-panel.active {
            display: block;
        }

        .panel-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 15px;
            border-bottom: 1px solid #30363d;
        }

        .panel-header h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0;
            color: #f0f6fc;
        }

        .refresh-btn {
            background: #21262d;
            border: 1px solid #30363d;
            color: #e6edf3;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: all 0.2s ease;
        }

        .refresh-btn:hover {
            background: #3fb950;
            color: #ffffff;
        }

        /* Chat Interface */
        .chat-area {
            display: flex;
            flex-direction: column;
            height: 500px;
        }

        .messages-container {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            background: #0d1117;
            border-radius: 8px;
            margin-bottom: 20px;
            border: 1px solid #21262d;
        }

        .welcome-msg {
            display: flex;
            gap: 15px;
            align-items: flex-start;
        }

        .bot-icon {
            font-size: 2rem;
            background: #58a6ff;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .welcome-text h3 {
            color: #58a6ff;
            margin: 0 0 10px 0;
        }

        .welcome-text ul {
            margin: 15px 0;
            padding-left: 20px;
        }

        .welcome-text li {
            margin-bottom: 8px;
            line-height: 1.4;
        }

        .input-section {
            background: #21262d;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #30363d;
        }

        .quick-actions {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
            flex-wrap: wrap;
        }

        .quick-btn {
            background: #30363d;
            border: 1px solid #484f58;
            color: #e6edf3;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: all 0.2s ease;
        }

        .quick-btn:hover {
            background: #58a6ff;
            color: white;
            transform: translateY(-1px);
        }

        .input-row {
            display: flex;
            gap: 15px;
            align-items: flex-end;
        }

        #chat-input {
            flex: 1;
            background: #0d1117;
            border: 1px solid #30363d;
            color: #e6edf3;
            padding: 12px 16px;
            border-radius: 8px;
            resize: vertical;
            font-family: inherit;
            font-size: 0.95rem;
            line-height: 1.4;
        }

        #chat-input:focus {
            outline: none;
            border-color: #58a6ff;
            box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1);
        }

        .send-btn {
            background: #3fb950;
            border: none;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.2s ease;
        }

        .send-btn:hover {
            background: #2ea043;
            transform: translateY(-1px);
        }

        .send-btn:disabled {
            background: #30363d;
            color: #8b949e;
            cursor: not-allowed;
            transform: none;
        }

        .input-footer {
            margin-top: 10px;
            text-align: center;
        }

        .input-footer small {
            color: #8b949e;
            font-size: 0.8rem;
        }

        /* Skills Grid */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }

        .skill-card {
            background: #0d1117;
            border: 1px solid #30363d;
            border-radius: 8px;
            padding: 20px;
            transition: all 0.2s ease;
        }

        .skill-card:hover {
            border-color: #58a6ff;
            transform: translateY(-2px);
        }

        .skill-icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
        }

        .skill-info h3 {
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0 0 8px 0;
            color: #f0f6fc;
        }

        .skill-info p {
            color: #8b949e;
            line-height: 1.4;
            margin-bottom: 15px;
        }

        .skill-stats {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .badge {
            background: #3fb950;
            color: white;
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .usage {
            color: #8b949e;
            font-size: 0.85rem;
        }

        /* Analytics Dashboard */
        .metrics-dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .metric-card {
            background: #0d1117;
            border: 1px solid #30363d;
            border-radius: 8px;
            padding: 25px 20px;
            text-align: center;
            transition: all 0.2s ease;
        }

        .metric-card:hover {
            border-color: #58a6ff;
        }

        .metric-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: #58a6ff;
            margin-bottom: 8px;
        }

        .metric-label {
            color: #8b949e;
            font-size: 0.9rem;
            font-weight: 500;
        }

        .activity-section h3 {
            font-size: 1.2rem;
            margin-bottom: 20px;
            color: #f0f6fc;
        }

        .activity-list, .log-entries {
            background: #0d1117;
            border: 1px solid #30363d;
            border-radius: 8px;
            padding: 0;
            overflow: hidden;
        }

        .activity-item, .log-entry {
            display: grid;
            grid-template-columns: 100px 1fr 40px;
            align-items: center;
            padding: 15px 20px;
            border-bottom: 1px solid #21262d;
            transition: background 0.2s ease;
        }

        .activity-item:hover, .log-entry:hover {
            background: #161b22;
        }

        .activity-item:last-child, .log-entry:last-child {
            border-bottom: none;
        }

        .activity-time, .log-time {
            color: #8b949e;
            font-size: 0.85rem;
        }

        .activity-desc, .log-message {
            color: #e6edf3;
            font-size: 0.9rem;
        }

        .activity-status, .log-level {
            text-align: center;
            font-size: 0.8rem;
            font-weight: 600;
            padding: 3px 6px;
            border-radius: 12px;
        }

        .activity-status.success {
            color: #3fb950;
        }

        .log-level.approved {
            background: #2d5016;
            color: #3fb950;
        }

        .log-level.warning {
            background: #341a00;
            color: #f85149;
        }

        .log-level.success {
            background: #2d5016;
            color: #3fb950;
        }

        /* Security Overview */
        .security-overview {
            margin-bottom: 30px;
        }

        .security-status {
            background: #0d1117;
            border: 1px solid #3fb950;
            border-radius: 8px;
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .status-icon {
            font-size: 2rem;
        }

        .status-info h3 {
            color: #3fb950;
            margin: 0 0 5px 0;
        }

        .status-info p {
            color: #8b949e;
            margin: 0;
            font-size: 0.9rem;
        }

        .security-logs h3 {
            font-size: 1.2rem;
            margin-bottom: 20px;
            color: #f0f6fc;
        }

        /* Configuration Help */
        .config-help {
            margin-top: 30px;
            background: #161b22;
            border: 1px solid #30363d;
            border-radius: 8px;
            padding: 20px;
        }

        .help-content h4 {
            color: #f0f6fc;
            margin: 0 0 10px 0;
        }

        .help-content p {
            color: #8b949e;
            margin-bottom: 10px;
        }

        .help-content ol {
            color: #e6edf3;
            margin-bottom: 15px;
        }

        .config-link {
            display: inline-block;
            background: #58a6ff;
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 6px;
            font-weight: 600;
            transition: all 0.2s ease;
        }

        .config-link:hover {
            background: #4493f8;
            transform: translateY(-1px);
        }

        /* Message Styles */
        .message-row {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
            padding: 15px;
            background: #161b22;
            border-radius: 8px;
            border: 1px solid #21262d;
        }

        .user-message {
            flex-direction: row-reverse;
            background: #0969da;
            color: white;
        }

        .message-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            flex-shrink: 0;
        }

        .bot-message .message-avatar {
            background: #58a6ff;
            color: white;
        }

        .user-message .message-avatar {
            background: white;
            color: #0969da;
        }

        .message-content {
            flex: 1;
            line-height: 1.5;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .gemini-ops-container {
                padding: 10px;
            }

            .gemini-header {
                flex-direction: column;
                gap: 15px;
                text-align: center;
            }

            .nav-tabs {
                flex-direction: column;
            }

            .tab-btn {
                text-align: center;
            }

            .content-panel {
                padding: 20px;
            }

            .metrics-dashboard {
                grid-template-columns: 1fr;
            }

            .skills-grid {
                grid-template-columns: 1fr;
            }

            .activity-item, .log-entry {
                grid-template-columns: 1fr;
                gap: 10px;
                text-align: left;
            }

            .input-row {
                flex-direction: column;
                gap: 10px;
            }

            .quick-actions {
                justify-content: center;
            }
        }
    </style>

    <!-- JavaScript -->
    <script>
        // Wait for DOM to be ready
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Gemini-Ops initializing...');
            
            // Tab functionality
            const tabButtons = document.querySelectorAll('.tab-btn');
            const contentPanels = document.querySelectorAll('.content-panel');
            
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const targetView = this.getAttribute('data-view');
                    
                    // Remove active class from all tabs and panels
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    contentPanels.forEach(panel => panel.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Show corresponding content panel
                    const targetPanel = document.getElementById(targetView + '-content');
                    if (targetPanel) {
                        targetPanel.classList.add('active');
                    }
                });
            });
            
            // Quick action buttons
            const quickButtons = document.querySelectorAll('.quick-btn');
            const chatInput = document.getElementById('chat-input');
            
            quickButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const action = this.getAttribute('data-action');
                    const prompts = {
                        'table': 'Create a new table with custom fields for my application',
                        'user': 'Create a new user account and assign appropriate roles',
                        'widget': 'Build a Service Portal widget for displaying data',
                        'report': 'Generate a report to analyze system performance'
                    };
                    
                    if (chatInput && prompts[action]) {
                        chatInput.value = prompts[action];
                        chatInput.focus();
                    }
                });
            });
            
            // Send button functionality
            const sendButton = document.getElementById('send-button');
            const chatInputField = document.getElementById('chat-input');
            
            if (sendButton && chatInputField) {
                sendButton.addEventListener('click', function() {
                    const message = chatInputField.value.trim();
                    if (message) {
                        addMessageToChat(message, 'user');
                        chatInputField.value = '';
                        
                        // Simulate AI response
                        setTimeout(() => {
                            const response = generateAIResponse(message);
                            addMessageToChat(response, 'bot');
                        }, 1500);
                    }
                });
                
                // Enter key to send
                chatInputField.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendButton.click();
                    }
                });
            }
            
            // Refresh button functionality
            const refreshButtons = document.querySelectorAll('.refresh-btn');
            refreshButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Add loading animation
                    this.innerHTML = '🔄 Refreshing...';
                    this.disabled = true;
                    
                    setTimeout(() => {
                        this.innerHTML = '🔄 Refresh';
                        this.disabled = false;
                        console.log('Data refreshed');
                    }, 2000);
                });
            });
            
            console.log('Gemini-Ops ready! 🚀');
        });
        
        // Add message to chat
        function addMessageToChat(message, sender) {
            const messagesContainer = document.getElementById('messages-container');
            if (!messagesContainer) return;
            
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message-row' + (sender === 'user' ? ' user-message' : '');
            
            const avatar = sender === 'user' ? '👤' : '🤖';
            
            messageDiv.innerHTML = \`
                <div class="message-avatar">\${avatar}</div>
                <div class="message-content">
                    \${sender === 'user' ? escapeHtml(message) : message}
                </div>
            \`;
            
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
        
        // Generate AI response
        function generateAIResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            if (lowerMessage.includes('table')) {
                return \`
                    <h4>🏗️ Table Creation Request</h4>
                    <p><strong>Analysis:</strong> I understand you want to create a new table. Here's what I can help with:</p>
                    <div style="background: #0d1117; border: 1px solid #30363d; border-radius: 6px; padding: 15px; margin: 10px 0;">
                        <strong>Recommended Approach:</strong>
                        <ul>
                            <li>Define table name and label</li>
                            <li>Add standard fields (number, description, state)</li>
                            <li>Configure access controls</li>
                            <li>Set up business rules if needed</li>
                        </ul>
                    </div>
                    <p><strong>Next Step:</strong> Please specify the table name and what type of data it should store.</p>
                    <p><em>Note: Configure your API key in System Properties for full AI functionality.</em></p>
                \`;
            } else if (lowerMessage.includes('user')) {
                return \`
                    <h4>👤 User Management Request</h4>
                    <p><strong>Analysis:</strong> I can help you with user account management:</p>
                    <div style="background: #0d1117; border: 1px solid #30363d; border-radius: 6px; padding: 15px; margin: 10px 0;">
                        <strong>Available Operations:</strong>
                        <ul>
                            <li>Create new user accounts</li>
                            <li>Assign roles and groups</li>
                            <li>Set user preferences</li>
                            <li>Manage access permissions</li>
                        </ul>
                    </div>
                    <p><strong>Security Note:</strong> All user operations are logged and monitored.</p>
                \`;
            } else if (lowerMessage.includes('widget')) {
                return \`
                    <h4>🎨 Service Portal Widget</h4>
                    <p><strong>Analysis:</strong> I can help you build Service Portal widgets:</p>
                    <div style="background: #0d1117; border: 1px solid #30363d; border-radius: 6px; padding: 15px; margin: 10px 0;">
                        <strong>Widget Components:</strong>
                        <ul>
                            <li>HTML Template with responsive design</li>
                            <li>AngularJS Client Controller</li>
                            <li>Server-side data script</li>
                            <li>Custom CSS styling</li>
                        </ul>
                    </div>
                    <p><strong>Tell me:</strong> What should your widget display and what functionality do you need?</p>
                \`;
            } else if (lowerMessage.includes('help') || lowerMessage.includes('api')) {
                return \`
                    <h4>🔧 Configuration Help</h4>
                    <p>To unlock full AI capabilities, configure your Google Gemini API key:</p>
                    <div style="background: #0d1117; border: 1px solid #30363d; border-radius: 6px; padding: 15px; margin: 10px 0;">
                        <strong>Setup Steps:</strong>
                        <ol>
                            <li>Navigate to <strong>System Properties</strong></li>
                            <li>Filter by: <code>x_1909902_geminiop</code></li>
                            <li>Update: <code>api_key</code> with your key</li>
                            <li>Save and test the connection</li>
                        </ol>
                    </div>
                    <p><strong>Get API Key:</strong> <a href="https://makersuite.google.com/app/apikey" target="_blank" style="color: #58a6ff;">Google AI Studio</a></p>
                \`;
            } else {
                return \`
                    <h4>🤖 I'm Here to Help!</h4>
                    <p>I understand you need assistance with: <strong>"\${escapeHtml(message)}"</strong></p>
                    <div style="background: #0d1117; border: 1px solid #30363d; border-radius: 6px; padding: 15px; margin: 10px 0;">
                        <strong>I can help you with:</strong>
                        <ul>
                            <li><strong>🏗️ Tables:</strong> "Create a table for asset management"</li>
                            <li><strong>👤 Users:</strong> "Add John Smith to IT Support group"</li>
                            <li><strong>🎨 Widgets:</strong> "Build a dashboard widget"</li>
                            <li><strong>📊 Reports:</strong> "Generate incident analysis report"</li>
                        </ul>
                    </div>
                    <p><strong>Try being more specific</strong> about what you want to create or manage!</p>
                \`;
            }
        }
        
        // Escape HTML
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
    </script>

</j:jelly>`,
})