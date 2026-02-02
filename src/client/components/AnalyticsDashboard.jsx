import React, { useState, useEffect } from 'react';
import './AnalyticsDashboard.css';

const AnalyticsDashboard = ({ onClose }) => {
  const [metrics, setMetrics] = useState({
    totalChats: 0,
    successfulOperations: 0,
    skillsLearned: 0,
    averageResponseTime: 0,
    topSkills: [],
    recentActivity: [],
    systemHealth: 'excellent'
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
    const interval = setInterval(loadAnalytics, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const loadAnalytics = async () => {
    try {
      setLoading(true);
      // In a real implementation, this would call the GeminiOpsService
      // For now, we'll simulate the data
      
      setTimeout(() => {
        setMetrics({
          totalChats: 1247,
          successfulOperations: 1189,
          skillsLearned: 23,
          averageResponseTime: 2.3,
          topSkills: [
            { name: 'User Management', usage: 89, success: 98 },
            { name: 'Table Creation', usage: 67, success: 94 },
            { name: 'Widget Development', usage: 45, success: 91 },
            { name: 'Business Rules', usage: 34, success: 97 },
            { name: 'Report Generation', usage: 28, success: 89 }
          ],
          recentActivity: [
            { time: '2 min ago', action: 'Created incident table with 5 custom fields', status: 'success' },
            { time: '5 min ago', action: 'Assigned admin role to john.doe', status: 'success' },
            { time: '12 min ago', action: 'Generated monthly incident report', status: 'success' },
            { time: '18 min ago', action: 'Created service portal widget "Status Board"', status: 'success' },
            { time: '23 min ago', action: 'Set up automated cleanup job', status: 'warning' }
          ],
          systemHealth: 'excellent'
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Failed to load analytics:', error);
      setLoading(false);
    }
  };

  const getHealthColor = (health) => {
    switch(health) {
      case 'excellent': return '#10b981';
      case 'good': return '#f59e0b';
      case 'warning': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      default: return 'ℹ️';
    }
  };

  if (loading) {
    return (
      <div className="analytics-dashboard">
        <div className="dashboard-header">
          <h2>🎯 Analytics Dashboard</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="analytics-dashboard">
      <div className="dashboard-header">
        <h2>🎯 Analytics Dashboard</h2>
        <div className="dashboard-actions">
          <button className="refresh-btn" onClick={loadAnalytics}>🔄</button>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon">💬</div>
          <div className="metric-content">
            <h3>{metrics.totalChats.toLocaleString()}</h3>
            <p>Total Conversations</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">⚡</div>
          <div className="metric-content">
            <h3>{metrics.successfulOperations.toLocaleString()}</h3>
            <p>Successful Operations</p>
            <span className="success-rate">
              {((metrics.successfulOperations / metrics.totalChats) * 100).toFixed(1)}% success rate
            </span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">🧠</div>
          <div className="metric-content">
            <h3>{metrics.skillsLearned}</h3>
            <p>Skills Learned</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">⏱️</div>
          <div className="metric-content">
            <h3>{metrics.averageResponseTime}s</h3>
            <p>Avg Response Time</p>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="section">
          <h3>🏆 Top Performing Skills</h3>
          <div className="skills-list">
            {metrics.topSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-usage">Used {skill.usage} times</span>
                </div>
                <div className="skill-metrics">
                  <div className="usage-bar">
                    <div 
                      className="usage-fill" 
                      style={{ width: `${(skill.usage / 100) * 100}%` }}
                    ></div>
                  </div>
                  <span className="success-percentage">{skill.success}% success</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h3>📊 System Health</h3>
          <div className="health-indicator">
            <div 
              className="health-circle"
              style={{ backgroundColor: getHealthColor(metrics.systemHealth) }}
            ></div>
            <span className="health-text">
              System Status: <strong>{metrics.systemHealth.toUpperCase()}</strong>
            </span>
          </div>
          
          <div className="health-details">
            <div className="health-metric">
              <span>API Response Time</span>
              <span className="health-value good">Fast</span>
            </div>
            <div className="health-metric">
              <span>Error Rate</span>
              <span className="health-value excellent">0.2%</span>
            </div>
            <div className="health-metric">
              <span>Skill Accuracy</span>
              <span className="health-value excellent">94.8%</span>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>🚀 Recent Activity</h3>
          <div className="activity-feed">
            {metrics.recentActivity.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-icon">
                  {getStatusIcon(activity.status)}
                </div>
                <div className="activity-content">
                  <p className="activity-action">{activity.action}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;