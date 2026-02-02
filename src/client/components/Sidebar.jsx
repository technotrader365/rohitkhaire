import React from 'react';
import './Sidebar.css';

const Sidebar = ({
  currentView,
  onViewChange,
  systemStatus = {},
  systemHealth,  // Accept both prop names for backwards compatibility
  onShowAnalytics,
  notificationCount = 0,
  skillsCount = 0
}) => {
  // Merge systemHealth and systemStatus for backwards compatibility
  const status = {
    aiStatus: systemStatus?.aiStatus || systemStatus?.status || 'online',
    systemHealth: systemStatus?.systemHealth || systemHealth?.systemHealth || 95,
    activeUsers: systemStatus?.activeUsers || 12,
    status: systemStatus?.status || 'online'
  };

  const menuItems = [
    { id: 'chat', icon: '💬', label: 'AI Chat', description: 'Interactive AI assistant' },
    { id: 'skills', icon: '🧠', label: 'Skills', description: 'AI capability registry', badge: skillsCount },
    { id: 'logs', icon: '📋', label: 'Activity', description: 'System audit logs' },
    { id: 'security', icon: '🔒', label: 'Security', description: 'Security monitoring' },
    { id: 'settings', icon: '⚙️', label: 'Config', description: 'System settings' }
  ];

  const getHealthColor = (score) => {
    if (score >= 90) return '#10b981';
    if (score >= 75) return '#f59e0b';
    return '#ef4444';
  };

  const getStatusIcon = (aiStatus) => {
    switch (aiStatus) {
      case 'online': return '🟢';
      case 'warning': return '🟡';
      case 'error': return '🔴';
      default: return '🟢';
    }
  };

  const handleAnalyticsClick = () => {
    if (onShowAnalytics) {
      onShowAnalytics();
    } else if (onViewChange) {
      onViewChange('analytics');
    }
  };

  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <div className="brand">
          <span className="brand-icon">⚡</span>
          <div className="brand-text">
            <div className="brand-name">Gemini-Ops</div>
            <div className="brand-subtitle">AI Platform Manager</div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="status-section">
        <div className="section-title">System Status</div>

        <div className="status-card">
          <div className="status-item">
            <div className="status-label">AI Engine</div>
            <div className="status-value">
              {getStatusIcon(status.aiStatus)} Online
            </div>
          </div>

          <div className="status-item">
            <div className="status-label">Health Score</div>
            <div className="status-value">
              <div
                className="health-indicator"
                style={{ backgroundColor: getHealthColor(status.systemHealth) }}
              ></div>
              {status.systemHealth}%
            </div>
          </div>

          <div className="status-item">
            <div className="status-label">Active Users</div>
            <div className="status-value">
              👥 {status.activeUsers}
            </div>
          </div>
        </div>

        <button className="analytics-button" onClick={handleAnalyticsClick}>
          <span className="analytics-icon">📊</span>
          <span>View Analytics</span>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        <div className="section-title">Navigation</div>

        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${currentView === item.id ? 'active' : ''}`}
            onClick={() => onViewChange(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <div className="nav-content">
              <div className="nav-label">
                {item.label}
                {item.badge > 0 && (
                  <span className="nav-badge">{item.badge}</span>
                )}
              </div>
              <div className="nav-description">{item.description}</div>
            </div>
          </button>
        ))}
      </nav>

      {/* Quick Actions */}
      <div className="quick-actions">
        <div className="section-title">Quick Actions</div>

        <div className="action-grid">
          <button className="action-btn" title="Create User" onClick={() => onViewChange('chat')}>
            <span className="action-icon">👤</span>
          </button>
          <button className="action-btn" title="Build Table" onClick={() => onViewChange('chat')}>
            <span className="action-icon">🗃️</span>
          </button>
          <button className="action-btn" title="Security Audit" onClick={() => onViewChange('security')}>
            <span className="action-icon">🔐</span>
          </button>
          <button className="action-btn" title="Generate Report" onClick={handleAnalyticsClick}>
            <span className="action-icon">📊</span>
          </button>
        </div>
      </div>

      {/* AI Capabilities */}
      <div className="capabilities-section">
        <div className="section-title">AI Capabilities</div>

        <div className="capability-list">
          <div className="capability-item">
            <span className="capability-icon">🛠️</span>
            <span className="capability-name">Platform Admin</span>
            <div className="capability-status active"></div>
          </div>

          <div className="capability-item">
            <span className="capability-icon">🏗️</span>
            <span className="capability-name">App Builder</span>
            <div className="capability-status active"></div>
          </div>

          <div className="capability-item">
            <span className="capability-icon">🔗</span>
            <span className="capability-name">Integration</span>
            <div className="capability-status active"></div>
          </div>

          <div className="capability-item">
            <span className="capability-icon">🔒</span>
            <span className="capability-name">Security</span>
            <div className="capability-status active"></div>
          </div>
        </div>
      </div>

      {/* Notifications Badge */}
      {notificationCount > 0 && (
        <div className="notification-indicator">
          <span className="notification-badge">{notificationCount}</span>
          <span className="notification-text">notifications</span>
        </div>
      )}

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="footer-info">
          <div className="version">v2.1.0</div>
          <div className="uptime">Uptime: 99.9%</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;