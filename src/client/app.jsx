import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import GeminiOpsService from './services/GeminiOpsService';
import './app.css';

const App = () => {
  // View management
  const [currentView, setCurrentView] = useState('chat');
  
  // Chat state management
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "👋 **Welcome to Gemini-Ops Builder Agent!**\n\nI'm your AI-powered ServiceNow assistant. I can help you:\n\n- 🏗️ **Build applications** - Tables, forms, workflows\n- 👥 **Manage users** - Create accounts, assign roles\n- 🔒 **Configure security** - ACLs, access controls\n- 📊 **Generate reports** - Analytics, dashboards\n- ⚡ **Automate tasks** - Business rules, scripts\n\nWhat would you like to build today?",
      timestamp: new Date().toISOString(),
      thought: null
    }
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);
  
  // System state
  const [notifications, setNotifications] = useState([]);
  const [systemStatus, setSystemStatus] = useState({
    status: 'online',
    aiStatus: 'online',
    systemHealth: 95,
    activeUsers: 12
  });
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Service instance
  const geminiService = useRef(new GeminiOpsService());

  useEffect(() => {
    initializeApp();
    setupRealTimeUpdates();
    
    return () => {
      if (window.geminiEventSource) {
        window.geminiEventSource.close();
      }
    };
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const initializeApp = async () => {
    try {
      setIsLoading(true);
      
      // Load initial data concurrently
      const [healthData, skillsData, notificationData] = await Promise.all([
        geminiService.current.getSystemHealth().catch(() => ({ status: 'online', systemHealth: 95 })),
        geminiService.current.getSkills().catch(() => []),
        geminiService.current.getNotifications().catch(() => [])
      ]);

      setSystemStatus(prev => ({
        ...prev,
        ...healthData,
        aiStatus: healthData.status || 'online',
        systemHealth: healthData.systemHealth || 95
      }));
      setSkills(skillsData);
      setNotifications(notificationData);
      
    } catch (error) {
      console.error('Failed to initialize app:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const setupRealTimeUpdates = () => {
    try {
      window.geminiEventSource = geminiService.current.subscribeToUpdates({
        onNotification: (notification) => {
          setNotifications(prev => [notification, ...prev.slice(0, 9)]);
          showNotificationToast(notification);
        },
        onSecurityEvent: (securityEvent) => {
          console.warn('Security Event:', securityEvent);
          if (securityEvent.severity === 'high') {
            showSecurityAlert(securityEvent);
          }
        },
        onMessage: (message) => {
          if (message.type === 'system_health') {
            setSystemStatus(prev => ({ ...prev, ...message.data }));
          }
        },
        onError: (error) => {
          console.error('Real-time connection error:', error);
        }
      });
    } catch (error) {
      console.error('Failed to setup real-time updates:', error);
    }
  };

  // ============ CHAT MESSAGE HANDLING ============
  
  const handleSendMessage = async (messageText) => {
    if (!messageText.trim() || isThinking) return;

    // Add user message
    const userMessage = {
      role: 'user',
      text: messageText,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsThinking(true);

    try {
      // Get conversation history for context
      const history = messages.slice(-10).map(m => ({
        role: m.role,
        content: m.text
      }));

      // Send to AI service
      const response = await geminiService.current.sendMessage(messageText, history);

      // Add AI response
      const aiMessage = {
        role: 'assistant',
        text: response.message || response.content || "I've processed your request.",
        timestamp: new Date().toISOString(),
        thought: response.thought || null,
        artifact: response.artifact || null
      };

      setMessages(prev => [...prev, aiMessage]);

      // Handle any security warnings
      if (response.securityWarning) {
        showSecurityAlert({ 
          severity: 'medium', 
          message: response.securityWarning 
        });
      }

    } catch (error) {
      console.error('Failed to send message:', error);
      
      // Add error message
      const errorMessage = {
        role: 'assistant',
        text: `⚠️ **Error:** ${error.message || 'Failed to process your request. Please try again.'}`,
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsThinking(false);
    }
  };

  // ============ NOTIFICATION HELPERS ============

  const showNotificationToast = (notification) => {
    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    toast.innerHTML = `
      <div class="toast-content">
        <div class="toast-title">${notification.title || 'Notification'}</div>
        <div class="toast-message">${notification.message}</div>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 5000);
  };

  const showSecurityAlert = (securityEvent) => {
    const alert = document.createElement('div');
    alert.className = 'security-alert';
    alert.innerHTML = `
      <div class="alert-content">
        <div class="alert-icon">🚨</div>
        <div class="alert-text">
          <strong>Security Alert</strong><br/>
          ${securityEvent.message}
        </div>
        <button onclick="this.parentElement.parentElement.remove()">×</button>
      </div>
    `;
    
    document.body.appendChild(alert);
  };

  // ============ VIEW HANDLERS ============

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleShowAnalytics = () => {
    setCurrentView('analytics');
  };

  const handleSkillUpdate = (updatedSkills) => {
    setSkills(updatedSkills);
  };

  // ============ RENDER MAIN CONTENT ============

  const renderMainContent = () => {
    if (isLoading) {
      return (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Initializing Gemini-Ops...</p>
        </div>
      );
    }

    switch (currentView) {
      case 'analytics':
        return (
          <AnalyticsDashboard 
            onClose={() => setCurrentView('chat')}
            systemHealth={systemStatus}
          />
        );
      
      case 'skills':
        return (
          <div className="skills-manager">
            <div className="skills-header">
              <h2>🧠 Skill Management</h2>
              <button 
                className="back-btn"
                onClick={() => setCurrentView('chat')}
              >
                ← Back to Chat
              </button>
            </div>
            <div className="skills-content">
              {skills.length > 0 ? (
                skills.map(skill => (
                  <div key={skill.id} className="skill-card">
                    <div className="skill-info">
                      <h3>{skill.name}</h3>
                      <p>{skill.description}</p>
                      <div className="skill-meta">
                        <span className="category">{skill.category}</span>
                        <span className="usage">Used {skill.usage_count || 0} times</span>
                      </div>
                    </div>
                    <div className="skill-actions">
                      <button className="test-btn">Test</button>
                      <button className="edit-btn">Edit</button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <p>No skills registered yet. Skills are learned automatically!</p>
                </div>
              )}
            </div>
          </div>
        );
      
      case 'security':
        return (
          <div className="security-dashboard">
            <div className="security-header">
              <h2>🛡️ Security Monitor</h2>
              <button 
                className="back-btn"
                onClick={() => setCurrentView('chat')}
              >
                ← Back to Chat
              </button>
            </div>
            <div className="security-content">
              <div className="security-status">
                <div className="status-item">
                  <span>System Health:</span>
                  <span className={`status ${systemStatus.status}`}>
                    {systemStatus.status?.toUpperCase() || 'ONLINE'}
                  </span>
                </div>
                <div className="status-item">
                  <span>Security Level:</span>
                  <span className="status high">SECURE</span>
                </div>
                <div className="status-item">
                  <span>Active Monitoring:</span>
                  <span className="status good">ENABLED</span>
                </div>
              </div>
              
              <div className="recent-alerts">
                <h3>Recent Security Events</h3>
                <div className="alerts-list">
                  <div className="alert-item">
                    <span className="alert-time">2 min ago</span>
                    <span className="alert-message">High-privilege operation approved</span>
                    <span className="alert-level success">✓</span>
                  </div>
                  <div className="alert-item">
                    <span className="alert-time">15 min ago</span>
                    <span className="alert-message">Admin role assignment flagged for review</span>
                    <span className="alert-level warning">⚠️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'logs':
        return (
          <div className="logs-viewer">
            <div className="logs-header">
              <h2>📋 Activity Logs</h2>
              <button 
                className="back-btn"
                onClick={() => setCurrentView('chat')}
              >
                ← Back to Chat
              </button>
            </div>
            <div className="logs-content">
              {messages.filter(m => m.artifact).map((msg, idx) => (
                <div key={idx} className="log-entry">
                  <span className="log-time">{new Date(msg.timestamp).toLocaleString()}</span>
                  <span className="log-action">{msg.artifact?.operation || 'Action completed'}</span>
                </div>
              ))}
              {messages.filter(m => m.artifact).length === 0 && (
                <div className="empty-state">
                  <p>No activity recorded yet.</p>
                </div>
              )}
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="settings-panel">
            <div className="settings-header">
              <h2>⚙️ Configuration</h2>
              <button 
                className="back-btn"
                onClick={() => setCurrentView('chat')}
              >
                ← Back to Chat
              </button>
            </div>
            <div className="settings-content">
              <div className="setting-group">
                <h3>AI Settings</h3>
                <div className="setting-item">
                  <label>Model</label>
                  <span>Gemini 1.5 Pro</span>
                </div>
                <div className="setting-item">
                  <label>Auto-Learning</label>
                  <span className="status-badge enabled">Enabled</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <ChatInterface 
            messages={messages}
            isThinking={isThinking}
            onSendMessage={handleSendMessage}
            messagesEndRef={messagesEndRef}
          />
        );
    }
  };

  return (
    <div className="app">
      <Sidebar 
        currentView={currentView}
        onViewChange={handleViewChange}
        systemStatus={systemStatus}
        onShowAnalytics={handleShowAnalytics}
        notificationCount={notifications.length}
        skillsCount={skills.length}
      />
      <main className="main-content">
        {renderMainContent()}
      </main>
    </div>
  );
};

// Global UI methods for external access
window.geminiUI = {
  showWarning: (message) => {
    console.warn('UI Warning:', message);
  },
  showApprovalRequired: (data) => {
    console.info('Approval Required:', data);
  }
};

export default App;