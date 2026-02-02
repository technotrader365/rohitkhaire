import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import GeminiOpsService from './services/GeminiOpsService';
import './app.css';

const App = () => {
  const [currentView, setCurrentView] = useState('chat');
  const [notifications, setNotifications] = useState([]);
  const [systemHealth, setSystemHealth] = useState({ status: 'unknown' });
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeApp();
    setupRealTimeUpdates();
    
    return () => {
      if (window.geminiEventSource) {
        window.geminiEventSource.close();
      }
    };
  }, []);

  const initializeApp = async () => {
    try {
      setIsLoading(true);
      
      // Load initial data concurrently
      const [healthData, skillsData, notificationData] = await Promise.all([
        GeminiOpsService.getSystemHealth().catch(() => ({ status: 'unknown' })),
        GeminiOpsService.getSkills().catch(() => []),
        GeminiOpsService.getNotifications().catch(() => [])
      ]);

      setSystemHealth(healthData);
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
      window.geminiEventSource = GeminiOpsService.subscribeToUpdates({
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
          // Handle real-time system messages
          if (message.type === 'system_health') {
            setSystemHealth(message.data);
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

  const showNotificationToast = (notification) => {
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    toast.innerHTML = `
      <div class="toast-content">
        <div class="toast-title">${notification.title}</div>
        <div class="toast-message">${notification.message}</div>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 5000);
  };

  const showSecurityAlert = (securityEvent) => {
    // Show prominent security alert
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

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleSkillUpdate = (updatedSkills) => {
    setSkills(updatedSkills);
  };

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
            systemHealth={systemHealth}
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
              {skills.map(skill => (
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
              ))}
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
                  <span className={`status ${systemHealth.status}`}>
                    {systemHealth.status?.toUpperCase()}
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
      
      default:
        return (
          <ChatInterface 
            notifications={notifications}
            systemHealth={systemHealth}
          />
        );
    }
  };

  return (
    <div className="app">
      <Sidebar 
        currentView={currentView}
        onViewChange={handleViewChange}
        systemHealth={systemHealth}
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
    // Implement warning display
  },
  showApprovalRequired: (data) => {
    console.info('Approval Required:', data);
    // Implement approval UI
  }
};

export default App;