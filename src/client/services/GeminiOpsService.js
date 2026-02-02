/**
 * Enhanced GeminiOps Service - Comprehensive AI Platform Integration
 * Handles chat, analytics, security monitoring, and skill management
 */
class GeminiOpsService {
    constructor() {
        this.apiEndpoint = '/api/x_1909902_geminiop/gemini_ops';
        this.analyticsCache = null;
        this.cacheTimeout = 30000; // 30 seconds
        this.retryAttempts = 3;
    }

    /**
     * Send message to AI with enhanced error handling and security
     */
    async sendMessage(message, conversationHistory = []) {
        try {
            const response = await this._makeRequest('chat', {
                message: message,
                history: conversationHistory,
                timestamp: new Date().toISOString(),
                sessionId: this._getSessionId()
            });

            // Handle security warnings
            if (response.securityWarning) {
                this._showSecurityWarning(response.securityWarning);
            }

            // Handle approval requirements
            if (response.requiresApproval) {
                this._handleApprovalRequired(response);
            }

            return response;
        } catch (error) {
            console.error('Failed to send message:', error);
            throw new Error('Communication with AI failed. Please try again.');
        }
    }

    /**
     * Load comprehensive analytics data
     */
    async getAnalytics(forceRefresh = false) {
        if (!forceRefresh && this.analyticsCache && 
            (Date.now() - this.analyticsCache.timestamp) < this.cacheTimeout) {
            return this.analyticsCache.data;
        }

        try {
            const data = await this._makeRequest('analytics', {
                includeMetrics: true,
                includeTrends: true,
                includeSecurityStats: true,
                timeRange: '30d'
            });

            this.analyticsCache = {
                data: data,
                timestamp: Date.now()
            };

            return data;
        } catch (error) {
            console.error('Failed to load analytics:', error);
            throw new Error('Unable to load analytics data');
        }
    }

    /**
     * Get available skills with categories
     */
    async getSkills(category = null) {
        try {
            return await this._makeRequest('skills', {
                category: category,
                includeUsageStats: true,
                includeTemplate: false
            });
        } catch (error) {
            console.error('Failed to load skills:', error);
            return [];
        }
    }

    /**
     * Create or update a skill
     */
    async saveSkill(skillData) {
        try {
            return await this._makeRequest('skills/save', skillData);
        } catch (error) {
            console.error('Failed to save skill:', error);
            throw new Error('Unable to save skill');
        }
    }

    /**
     * Test a skill with sample data
     */
    async testSkill(skillId, testData) {
        try {
            return await this._makeRequest('skills/test', {
                skillId: skillId,
                testData: testData,
                dryRun: true
            });
        } catch (error) {
            console.error('Failed to test skill:', error);
            throw new Error('Skill testing failed');
        }
    }

    /**
     * Get security audit logs
     */
    async getSecurityAudit(filters = {}) {
        try {
            return await this._makeRequest('security/audit', {
                ...filters,
                limit: filters.limit || 50,
                orderBy: 'timestamp DESC'
            });
        } catch (error) {
            console.error('Failed to load security audit:', error);
            return [];
        }
    }

    /**
     * Get system health status
     */
    async getSystemHealth() {
        try {
            return await this._makeRequest('system/health', {
                includeMetrics: true,
                includePerformance: true
            });
        } catch (error) {
            console.error('Failed to get system health:', error);
            return { status: 'unknown', message: 'Unable to determine system health' };
        }
    }

    /**
     * Export conversation data
     */
    async exportConversations(format = 'json', filters = {}) {
        try {
            const response = await this._makeRequest('export/conversations', {
                format: format,
                filters: filters,
                includeMetadata: true
            });

            this._downloadFile(response.data, `gemini-ops-export.${format}`);
            return { success: true };
        } catch (error) {
            console.error('Failed to export conversations:', error);
            throw new Error('Export failed');
        }
    }

    /**
     * Get real-time notifications
     */
    async getNotifications() {
        try {
            return await this._makeRequest('notifications', {
                unreadOnly: true,
                limit: 10
            });
        } catch (error) {
            console.error('Failed to load notifications:', error);
            return [];
        }
    }

    /**
     * Mark notification as read
     */
    async markNotificationRead(notificationId) {
        try {
            return await this._makeRequest('notifications/read', {
                notificationId: notificationId
            });
        } catch (error) {
            console.error('Failed to mark notification as read:', error);
        }
    }

    // Private Methods

    /**
     * Make HTTP request with retry logic and error handling
     */
    async _makeRequest(endpoint, data = {}, attempt = 1) {
        const url = `${this.apiEndpoint}/${endpoint}`;
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-UserToken': this._getUserToken(),
                    'X-Session-ID': this._getSessionId()
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const result = await response.json();
            
            if (result.error) {
                throw new Error(result.error);
            }

            return result;
        } catch (error) {
            if (attempt < this.retryAttempts && this._isRetryableError(error)) {
                console.warn(`Request failed, retrying (${attempt}/${this.retryAttempts}):`, error.message);
                await this._delay(1000 * attempt);
                return this._makeRequest(endpoint, data, attempt + 1);
            }
            throw error;
        }
    }

    /**
     * Check if error is retryable
     */
    _isRetryableError(error) {
        return error.message.includes('timeout') || 
               error.message.includes('network') ||
               error.message.includes('500') ||
               error.message.includes('503');
    }

    /**
     * Delay for retry logic
     */
    _delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Get user session token
     */
    _getUserToken() {
        return window.g_ck || 'anonymous';
    }

    /**
     * Get or create session ID
     */
    _getSessionId() {
        if (!this.sessionId) {
            this.sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        }
        return this.sessionId;
    }

    /**
     * Show security warning to user
     */
    _showSecurityWarning(warning) {
        // This would integrate with the UI to show warnings
        console.warn('SECURITY WARNING:', warning);
        if (window.geminiUI && window.geminiUI.showWarning) {
            window.geminiUI.showWarning(warning);
        }
    }

    /**
     * Handle approval required scenario
     */
    _handleApprovalRequired(response) {
        console.info('Operation requires approval:', response.approvalId);
        if (window.geminiUI && window.geminiUI.showApprovalRequired) {
            window.geminiUI.showApprovalRequired(response);
        }
    }

    /**
     * Download file helper
     */
    _downloadFile(data, filename) {
        const blob = new Blob([data], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }

    /**
     * Real-time updates using EventSource (Server-Sent Events)
     */
    subscribeToUpdates(callbacks = {}) {
        if (typeof EventSource !== 'undefined') {
            const eventSource = new EventSource(`${this.apiEndpoint}/events`);
            
            eventSource.addEventListener('message', (event) => {
                try {
                    const data = JSON.parse(event.data);
                    if (callbacks.onMessage) callbacks.onMessage(data);
                } catch (error) {
                    console.error('Failed to parse SSE message:', error);
                }
            });

            eventSource.addEventListener('notification', (event) => {
                try {
                    const notification = JSON.parse(event.data);
                    if (callbacks.onNotification) callbacks.onNotification(notification);
                } catch (error) {
                    console.error('Failed to parse notification:', error);
                }
            });

            eventSource.addEventListener('security', (event) => {
                try {
                    const securityEvent = JSON.parse(event.data);
                    if (callbacks.onSecurityEvent) callbacks.onSecurityEvent(securityEvent);
                } catch (error) {
                    console.error('Failed to parse security event:', error);
                }
            });

            eventSource.onerror = (error) => {
                console.error('EventSource error:', error);
                if (callbacks.onError) callbacks.onError(error);
            };

            return eventSource;
        } else {
            console.warn('EventSource not supported, falling back to polling');
            return this._setupPolling(callbacks);
        }
    }

    /**
     * Fallback polling for real-time updates
     */
    _setupPolling(callbacks) {
        const interval = setInterval(async () => {
            try {
                const notifications = await this.getNotifications();
                if (notifications.length > 0 && callbacks.onNotification) {
                    notifications.forEach(n => callbacks.onNotification(n));
                }
            } catch (error) {
                console.error('Polling error:', error);
            }
        }, 5000); // Poll every 5 seconds

        return {
            close: () => clearInterval(interval)
        };
    }
}

// Global instance
window.GeminiOpsService = new GeminiOpsService();

export default GeminiOpsService;