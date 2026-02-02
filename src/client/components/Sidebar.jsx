import React from 'react';
import './Sidebar.css';

const Sidebar = ({ currentView, onViewChange, systemStatus, onShowAnalytics }) => {
  const menuItems = [
    { id: 'chat', icon: '💬', label: 'AI Chat', description: 'Interactive AI assistant' },
    { id: 'skills', icon: '🧠', label: 'Skills', description: 'AI capability registry' },
    { id: 'logs', icon: '📋', label: 'Activity', description: 'System audit logs' },
    { id: 'settings', icon: '⚙️', label: 'Config', description: 'System settings' }
  ];

  const getHealthColor = (score) => {
    if (score >= 90) return '#10b981';
    if (score >= 75) return '#f59e0b';
    return '#ef4444';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'online': return '🟢';
      case 'warning': return '🟡';
      case 'error': return '🔴';
      default: return '⚪';
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
              {getStatusIcon(systemStatus.aiStatus)} Online
            </div>
          </div>
          
          <div className="status-item">
            <div className="status-label">Health Score</div>
            <div className="status-value">
              <div 
                className="health-indicator"
                style={{ backgroundColor: getHealthColor(systemStatus.systemHealth) }}
              ></div>
              {systemStatus.systemHealth}%
            </div>
          </div>
          
          <div className="status-item">
            <div className="status-label">Active Users</div>
            <div className="status-value">
              👥 {systemStatus.activeUsers}
            </div>
          </div>
        </div>

        <button className="analytics-button" onClick={onShowAnalytics}>
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
              <div className="nav-label">{item.label}</div>
              <div className="nav-description">{item.description}</div>
            </div>
          </button>
        ))}
      </nav>

      {/* Quick Actions */}
      <div className="quick-actions">
        <div className="section-title">Quick Actions</div>
        
        <div className="action-grid">
          <button className="action-btn" title="Create User">
            <span className="action-icon">👤</span>
          </button>
          <button className="action-btn" title="Build Table">
            <span className="action-icon">🗃️</span>
          </button>
          <button className="action-btn" title="Security Audit">
            <span className="action-icon">🔒</span>
          </button>
          <button className="action-btn" title="Generate Report">
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