import React, { useEffect } from 'react';

export default function MessageBubble({ message, isLatest }) {

  // Enhanced markdown parsing with better code block handling
  const parseMarkdown = (text) => {
    if (!text) return '';

    let parsed = String(text);

    // Code blocks (triple backticks)
    parsed = parsed.replace(/```(\w+)?\n?([\s\S]*?)```/g, (match, lang, code) => {
      const language = lang || 'javascript';
      return `<pre class="code-block"><code class="language-${language}">${escapeHtml(code.trim())}</code></pre>`;
    });

    // Inline code (single backticks)
    parsed = parsed.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

    // Bold text
    parsed = parsed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Italic text
    parsed = parsed.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Links
    parsed = parsed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Lists (simple implementation)
    parsed = parsed.replace(/^- (.+)$/gm, '<li>$1</li>');
    parsed = parsed.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Line breaks (convert double newlines to paragraphs, single to br)
    parsed = parsed.replace(/\n\n/g, '</p><p>');
    parsed = parsed.replace(/\n/g, '<br/>');

    // Wrap in paragraph if not already structured
    if (!parsed.startsWith('<')) {
      parsed = `<p>${parsed}</p>`;
    }

    return parsed;
  };

  const escapeHtml = (text) => {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  // Syntax highlighting effect
  useEffect(() => {
    if (isLatest && window.Prism) {
      setTimeout(() => {
        window.Prism.highlightAll();
      }, 100);
    }
  }, [isLatest, message?.text]);

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  // Handle missing or invalid message
  if (!message || !message.text) {
    return null;
  }

  return (
    <div className={`message-row ${message.role || 'assistant'}`}>
      <div className="avatar">
        <span>{message.role === 'user' ? '👤' : '🤖'}</span>
      </div>

      <div className="bubble">
        {/* Thought Process (for AI messages) */}
        {message.thought && (
          <div className="thought-badge">
            <details>
              <summary>💭 AI Reasoning Process</summary>
              <div className="thought-content">
                {message.thought}
              </div>
            </details>
          </div>
        )}

        {/* Main Message Content */}
        <div
          className="message-content"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(message.text) }}
        />

        {/* Artifact Card (if something was created) */}
        {message.artifact && (
          <div className="artifact-card">
            <div className="artifact-header">
              <span className="artifact-icon">✅</span>
              <span className="artifact-title">Action Completed</span>
            </div>
            <div className="artifact-body">
              <strong>Operation:</strong> {message.artifact.operation}<br />
              {message.artifact.id && (
                <>
                  <strong>Record ID:</strong>{' '}
                  <code className="artifact-id">{message.artifact.id}</code>
                </>
              )}
            </div>
          </div>
        )}

        {/* Message timestamp */}
        <div className="message-timestamp">
          {formatTimestamp(message.timestamp)}
        </div>
      </div>
    </div>
  );
}