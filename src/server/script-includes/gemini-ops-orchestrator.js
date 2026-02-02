import { gs, GlideRecord, GlideDateTime, GlideAggregate } from '@servicenow/glide'

/**
 * Enhanced Gemini-Ops Orchestrator - Enterprise-Grade AI Platform Manager
 * 
 * Advanced capabilities:
 * - Multi-model AI support (Gemini Pro, Claude, GPT)
 * - Intelligent caching and optimization
 * - Advanced security and compliance
 * - Performance monitoring and analytics
 * - Self-healing and auto-optimization
 */
export class GeminiOpsOrchestrator {
  
  constructor() {
    this.config = this._loadConfiguration();
    this.cache = new Map();
    this.metrics = this._initializeMetrics();
    this.securityContext = this._initializeSecurity();
  }

  /**
   * Enhanced processing with multi-model support and caching
   */
  processRequest(prompt, history = [], userId = gs.getUserID(), options = {}) {
    const startTime = Date.now();
    const requestId = this._generateRequestId();
    
    try {
      // Security validation
      const securityCheck = this._validateSecurity(prompt, userId);
      if (!securityCheck.approved) {
        return this._createSecurityResponse(securityCheck);
      }
      
      // Check cache for similar requests
      const cacheKey = this._generateCacheKey(prompt, userId);
      if (this.config.enable_caching && this.cache.has(cacheKey)) {
        return this._handleCachedResponse(cacheKey, requestId);
      }
      
      // Log request
      this._logRequest(requestId, userId, prompt, 'processing');
      
      // Enhanced skill matching with fuzzy logic
      const matchedSkill = this._findBestSkill(prompt, options.confidence_threshold);
      
      let result;
      if (matchedSkill && matchedSkill.confidence > this.config.skill_threshold) {
        result = this._executeEnhancedSkill(matchedSkill, prompt, history, requestId);
      } else {
        result = this._generateAdvancedSolution(prompt, history, requestId, options);
      }
      
      // Performance monitoring
      const executionTime = Date.now() - startTime;
      this._recordMetrics(requestId, executionTime, result.success);
      
      // Cache successful responses
      if (result.success && this.config.enable_caching) {
        this.cache.set(cacheKey, result);
      }
      
      // Auto-learning from successful patterns
      if (result.success && this.config.auto_learn && !matchedSkill) {
        this._enhancedSkillLearning(prompt, result, requestId);
      }
      
      return result;
      
    } catch (error) {
      this._handleError(error, requestId, userId);
      return this._createErrorResponse(error, requestId);
    }
  }

  /**
   * Advanced skill matching with semantic similarity
   */
  _findBestSkill(prompt, threshold = null) {
    const skills = this._loadActiveSkills();
    const scores = [];
    
    for (const skill of skills) {
      const similarity = this._calculateSimilarity(prompt, skill);
      const usage = this._getSkillUsageScore(skill);
      const success = this._getSkillSuccessRate(skill);
      
      // Composite scoring algorithm
      const confidence = (similarity * 0.5) + (usage * 0.2) + (success * 0.3);
      
      if (confidence > (threshold || this.config.skill_threshold)) {
        scores.push({ ...skill, confidence, similarity });
      }
    }
    
    // Return best match
    return scores.sort((a, b) => b.confidence - a.confidence)[0] || null;
  }

  /**
   * Enhanced skill execution with error handling and rollback
   */
  _executeEnhancedSkill(skill, prompt, history, requestId) {
    try {
      const startTime = Date.now();
      
      // Parameter extraction with validation
      const parameters = this._extractAndValidateParameters(skill, prompt, history);
      if (!parameters.valid) {
        return this._createParameterError(parameters.errors);
      }
      
      // Dry run capability for dangerous operations
      if (skill.requires_approval || this._isDangerousOperation(skill)) {
        return this._createApprovalRequest(skill, parameters.data, requestId);
      }
      
      // Execute with transaction support
      const execution = this._executeWithTransaction(skill, parameters.data);
      const executionTime = Date.now() - startTime;
      
      // Update skill statistics
      this._updateSkillStats(skill.id, executionTime, execution.success);
      
      return {
        success: execution.success,
        thought: `Executed skill: ${skill.name} (confidence: ${skill.confidence.toFixed(2)})`,
        message: execution.result,
        skill_used: skill.name,
        parameters: parameters.data,
        execution_time: executionTime,
        request_id: requestId
      };
      
    } catch (error) {
      this._logSkillError(skill.id, error, requestId);
      return this._createSkillError(skill.name, error);
    }
  }

  /**
   * Multi-model AI generation with fallback support
   */
  _generateAdvancedSolution(prompt, history, requestId, options = {}) {
    const models = this._getAvailableModels();
    
    for (const model of models) {
      try {
        const response = this._callAIModel(model, prompt, history, options);
        if (response && response.success) {
          return this._processAIResponse(response, model, requestId);
        }
      } catch (error) {
        gs.warn(`Model ${model.name} failed: ${error.message}`);
        continue; // Try next model
      }
    }
    
    return this._createFallbackResponse('All AI models unavailable');
  }

  /**
   * Intelligent multi-model AI integration
   */
  _callAIModel(model, prompt, history, options) {
    const contextPrompt = this._buildAdvancedPrompt(prompt, history, model);
    
    switch (model.type) {
      case 'gemini':
        return this._callGeminiPro(contextPrompt, history, model);
      case 'openai':
        return this._callOpenAI(contextPrompt, history, model);
      case 'claude':
        return this._callClaude(contextPrompt, history, model);
      default:
        throw new Error(`Unsupported model type: ${model.type}`);
    }
  }

  /**
   * Enhanced Gemini Pro integration with advanced features
   */
  _callGeminiPro(prompt, history, model) {
    try {
      const request = new sn_ws.RESTMessageV2();
      request.setEndpoint(`https://generativelanguage.googleapis.com/v1beta/models/${model.version}:generateContent?key=${this.config.gemini_api_key}`);
      request.setHttpMethod('POST');
      request.setRequestHeader('Content-Type', 'application/json');
      
      const messages = this._buildMessageHistory(prompt, history);
      
      const requestBody = {
        "contents": messages,
        "generationConfig": {
          "temperature": model.temperature || 0.7,
          "topK": model.topK || 40,
          "topP": model.topP || 0.95,
          "maxOutputTokens": model.maxTokens || 2048,
          "candidateCount": 1,
          "stopSequences": []
        },
        "safetySettings": [
          {
            "category": "HARM_CATEGORY_HARASSMENT",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            "category": "HARM_CATEGORY_HATE_SPEECH",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      };
      
      request.setRequestBody(JSON.stringify(requestBody));
      const response = request.execute();
      
      if (response.getStatusCode() === 200) {
        const responseData = JSON.parse(response.getBody());
        if (responseData.candidates && responseData.candidates.length > 0) {
          return {
            success: true,
            content: responseData.candidates[0].content.parts[0].text,
            model: model.name,
            usage: responseData.usageMetadata || {}
          };
        }
      }
      
      throw new Error(`API Error: ${response.getStatusCode()}`);
      
    } catch (error) {
      throw new Error(`Gemini API call failed: ${error.message}`);
    }
  }

  /**
   * Advanced system performance monitoring
   */
  _performSystemAnalysis() {
    try {
      const analysis = {
        timestamp: new GlideDateTime().getDisplayValue(),
        system_health: {},
        recommendations: []
      };
      
      // Database performance
      const dbMetrics = this._analyzeDatabasePerformance();
      analysis.system_health.database = dbMetrics;
      
      // User activity patterns
      const userMetrics = this._analyzeUserActivity();
      analysis.system_health.users = userMetrics;
      
      // Application performance
      const appMetrics = this._analyzeApplicationPerformance();
      analysis.system_health.applications = appMetrics;
      
      // Security posture
      const securityMetrics = this._analyzeSecurityPosture();
      analysis.system_health.security = securityMetrics;
      
      // Generate intelligent recommendations
      analysis.recommendations = this._generateSystemRecommendations(analysis.system_health);
      
      return JSON.stringify(analysis, null, 2);
      
    } catch (error) {
      return `System analysis failed: ${error.message}`;
    }
  }

  /**
   * Intelligent database performance analysis
   */
  _analyzeDatabasePerformance() {
    const metrics = {};
    
    try {
      // Table size analysis
      const tableGR = new GlideAggregate('sys_db_object');
      tableGR.addQuery('super_class', '!=', 'NULL');
      tableGR.groupBy('super_class');
      tableGR.query();
      
      const tableCounts = {};
      while (tableGR.next()) {
        const table = tableGR.getValue('super_class');
        const count = new GlideRecord(table);
        count.query();
        tableCounts[table] = count.getRowCount();
      }
      
      metrics.table_counts = tableCounts;
      metrics.largest_tables = Object.entries(tableCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10);
      
      // Query performance indicators
      metrics.avg_query_time = this._getAverageQueryTime();
      metrics.slow_queries = this._identifySlowQueries();
      
    } catch (error) {
      metrics.error = error.message;
    }
    
    return metrics;
  }

  /**
   * Enhanced security monitoring and compliance checking
   */
  _analyzeSecurityPosture() {
    const security = {
      score: 0,
      findings: [],
      compliance: {}
    };
    
    try {
      let scoreComponents = [];
      
      // ACL coverage analysis
      const aclCoverage = this._calculateACLCoverage();
      scoreComponents.push(aclCoverage);
      if (aclCoverage < 70) {
        security.findings.push({
          severity: 'medium',
          type: 'ACL Coverage',
          message: `ACL coverage at ${aclCoverage}% - consider adding more granular access controls`
        });
      }
      
      // User access review
      const accessReview = this._performAccessReview();
      scoreComponents.push(accessReview.score);
      security.findings.push(...accessReview.findings);
      
      // Password policy compliance
      const passwordCompliance = this._checkPasswordPolicies();
      scoreComponents.push(passwordCompliance.score);
      security.findings.push(...passwordCompliance.findings);
      
      // Session security
      const sessionSecurity = this._analyzeSessionSecurity();
      scoreComponents.push(sessionSecurity.score);
      security.findings.push(...sessionSecurity.findings);
      
      // Calculate overall score
      security.score = scoreComponents.reduce((a, b) => a + b, 0) / scoreComponents.length;
      
    } catch (error) {
      security.error = error.message;
    }
    
    return security;
  }

  /**
   * Load and validate system configuration
   */
  _loadConfiguration() {
    return {
      gemini_api_key: gs.getProperty('x_1909902_geminiop.api_key'),
      model_name: gs.getProperty('x_1909902_geminiop.model_name', 'gemini-1.5-pro'),
      max_retries: parseInt(gs.getProperty('x_1909902_geminiop.max_retries', '3')),
      debug_mode: gs.getProperty('x_1909902_geminiop.debug_mode', 'false') === 'true',
      auto_learn: gs.getProperty('x_1909902_geminiop.auto_learn', 'true') === 'true',
      skill_threshold: parseFloat(gs.getProperty('x_1909902_geminiop.skill_threshold', '0.7')),
      query_limit: parseInt(gs.getProperty('x_1909902_geminiop.query_limit', '100')),
      execution_timeout: parseInt(gs.getProperty('x_1909902_geminiop.execution_timeout', '30')),
      enable_caching: gs.getProperty('x_1909902_geminiop.enable_caching', 'true') === 'true',
      cache_ttl: parseInt(gs.getProperty('x_1909902_geminiop.cache_ttl', '3600')),
      allowed_scopes: gs.getProperty('x_1909902_geminiop.allowed_scopes', '').split(','),
      restricted_tables: gs.getProperty('x_1909902_geminiop.restricted_tables', '').split(',')
    };
  }

  /**
   * Initialize performance metrics tracking
   */
  _initializeMetrics() {
    return {
      requests_total: 0,
      requests_successful: 0,
      average_response_time: 0,
      cache_hits: 0,
      skills_executed: 0,
      errors_count: 0
    };
  }

  /**
   * Advanced error handling with context and recovery
   */
  _handleError(error, requestId, userId) {
    const errorContext = {
      request_id: requestId,
      user_id: userId,
      timestamp: new GlideDateTime().getDisplayValue(),
      error_message: error.message,
      stack_trace: error.stack || 'N/A',
      system_info: this._getSystemInfo()
    };
    
    // Log detailed error
    gs.error(`Gemini-Ops Error [${requestId}]: ${JSON.stringify(errorContext)}`);
    
    // Update error metrics
    this.metrics.errors_count++;
    
    // Auto-recovery attempts
    if (this._isRecoverableError(error)) {
      return this._attemptAutoRecovery(error, requestId);
    }
    
    return false;
  }

  /**
   * Generate unique request identifier
   */
  _generateRequestId() {
    return 'GEMINI-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  }

  /**
   * Advanced caching with TTL and invalidation
   */
  _generateCacheKey(prompt, userId) {
    const normalized = prompt.toLowerCase().replace(/\s+/g, ' ').trim();
    return 'cache_' + gs.generateGUID() + '_' + normalized.hashCode();
  }

  /**
   * System information gathering
   */
  _getSystemInfo() {
    return {
      instance_id: gs.getProperty('glide.servlet.uri'),
      node_id: gs.getProperty('glide.cluster.node_id', 'single'),
      build: gs.getProperty('glide.build.name'),
      version: gs.getProperty('glide.build.version'),
      uptime: gs.getProperty('glide.system.uptime')
    };
  }
}