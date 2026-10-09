import React, { useState, useEffect } from 'react';

export default function HealthStatus() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      // Calls relative URL /api/health which Vite dev proxy forwards to http://localhost:5000/api/health
      const response = await fetch('/api/health');
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setHealth(data);
    } catch (err) {
      setError(err.message || 'Failed to connect to backend server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealth();
  }, []);

  return (
    <div className="health-card">
      <div className="health-header">
        <h3>⚡ Backend Service Status</h3>
        <button onClick={fetchHealth} className="refresh-btn" title="Refresh backend status">
          🔄 Refresh
        </button>
      </div>

      {loading && (
        <div className="status-badge loading">
          <span>⏳ Checking backend connection via Vite proxy...</span>
        </div>
      )}

      {error && (
        <div className="status-badge error">
          <span>❌ Backend Offline: {error}</span>
        </div>
      )}

      {health && (
        <div className="status-badge success">
          <div className="status-row">
            <strong className="indicator online">● Status:</strong> {health.status}
          </div>
          <div className="status-row">
            <strong>Message:</strong> {health.message}
          </div>
          <div className="status-row">
            <strong>Timestamp:</strong> {new Date(health.timestamp).toLocaleTimeString()}
          </div>
          <div className="status-row">
            <strong>Environment:</strong> {health.environment}
          </div>
          <div className="status-proxy-note">
            ℹ️ Request path: <code>/api/health</code> (proxied to <code>http://localhost:5000/api/health</code>)
          </div>
        </div>
      )}
    </div>
  );
}
