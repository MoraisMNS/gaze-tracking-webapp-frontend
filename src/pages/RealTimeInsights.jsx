import React, { useState, useEffect } from 'react';
import { Eye, Target, Activity, Zap, TrendingUp, Cpu, Timer, Gauge } from 'lucide-react';
import './RealTimeInsights.css';

function RealTimeInsights() {
  const [gazeDirection, setGazeDirection] = useState('center');
  const [confidence, setConfidence] = useState(0);
  const [blinkCount, setBlinkCount] = useState(0);
  const [fps, setFps] = useState(0);
  const [latency, setLatency] = useState(0);
  const [heatmapData, setHeatmapData] = useState([]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      const directions = ['left', 'right', 'up', 'down', 'center'];
      setGazeDirection(directions[Math.floor(Math.random() * directions.length)]);
      setConfidence(85 + Math.random() * 13);
      setFps(28 + Math.random() * 4);
      setLatency(15 + Math.random() * 10);
      
      if (Math.random() > 0.95) {
        setBlinkCount(prev => prev + 1);
      }
    }, 500);

    // Generate heatmap data
    const heatmap = Array(48).fill(0).map(() => Math.random());
    setHeatmapData(heatmap);

    return () => clearInterval(interval);
  }, []);

  const getDirectionColor = (direction) => {
    const colors = {
      left: '#3b82f6',
      right: '#06b6d4',
      up: '#8b5cf6',
      down: '#10b981',
      center: '#f59e0b'
    };
    return colors[direction] || '#6b7280';
  };

  const getMarkerPosition = () => {
    const positions = {
      up: { top: '30%', left: '50%' },
      down: { top: '70%', left: '50%' },
      left: { top: '50%', left: '30%' },
      right: { top: '50%', left: '70%' },
      center: { top: '50%', left: '50%' }
    };
    return positions[gazeDirection];
  };

  return (
    <div className="realtime-page-container">
      {/* Hero Section */}
      <div className="realtime-hero-section">
        <div className="realtime-hero-content">
          <h1 className="realtime-hero-title">
            Real-Time Gaze Tracking Insights
          </h1>
          <p className="realtime-hero-subtitle">
            Experience live eye-tracking analytics powered by CNN and landmark detection. 
            Monitor gaze direction, confidence scores, and attention patterns in real-time.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="realtime-content-section">
        <div className="realtime-content-wrapper">
          
          {/* Live Status Banner */}
          <div className="realtime-status-banner">
            <div className="realtime-status-indicator"></div>
            <span className="realtime-status-text">System Active - Tracking in Progress</span>
          </div>

          {/* Main Dashboard Grid */}
          <div className="realtime-dashboard-grid">
            
            {/* Live Gaze Tracking Panel */}
            <div className="realtime-tracking-panel">
              <div className="realtime-panel-header">
                <h2 className="realtime-panel-title">
                  <Eye className="realtime-icon" />
                  Live Gaze Tracking
                </h2>
                <div className="realtime-live-badge">
                  <div className="realtime-live-dot"></div>
                  <span>Live</span>
                </div>
              </div>

              {/* Webcam Simulation Area */}
              <div className="realtime-webcam-container">
                <div className="realtime-webcam-placeholder">
                  <div className="realtime-placeholder-text">Webcam Feed Placeholder</div>
                </div>
                
                {/* Eye Bounding Boxes */}
                <div className="realtime-eye-box realtime-eye-left"></div>
                <div className="realtime-eye-box realtime-eye-right"></div>
                
                {/* Gaze Direction Marker */}
                <div 
                  className="realtime-gaze-marker"
                  style={getMarkerPosition()}
                ></div>
              </div>

              {/* Direction Indicator */}
              <div className="realtime-direction-indicator">
                <span className="realtime-direction-label">Current Direction:</span>
                <span 
                  className="realtime-direction-value"
                  style={{ backgroundColor: getDirectionColor(gazeDirection) }}
                >
                  {gazeDirection.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Right Sidebar - Metrics */}
            <div className="realtime-metrics-sidebar">
              
              {/* Confidence Score */}
              <div className="realtime-metric-card">
                <div className="realtime-metric-header">
                  <div className="realtime-metric-icon-wrapper realtime-icon-blue">
                    <Gauge className="realtime-metric-icon" />
                  </div>
                  <div>
                    <h3 className="realtime-metric-title">Confidence Score</h3>
                    <p className="realtime-metric-subtitle">CNN Model Output</p>
                  </div>
                </div>
                <div className="realtime-metric-value realtime-value-blue">
                  {confidence.toFixed(1)}%
                </div>
                <div className="realtime-progress-bar">
                  <div 
                    className="realtime-progress-fill realtime-progress-blue"
                    style={{ width: `${confidence}%` }}
                  ></div>
                </div>
              </div>

              {/* Blink Counter */}
              <div className="realtime-metric-card">
                <div className="realtime-metric-header">
                  <div className="realtime-metric-icon-wrapper realtime-icon-purple">
                    <Activity className="realtime-metric-icon" />
                  </div>
                  <div>
                    <h3 className="realtime-metric-title">Blink Count</h3>
                    <p className="realtime-metric-subtitle">Intentional Blinks</p>
                  </div>
                </div>
                <div className="realtime-metric-value realtime-value-purple">
                  {blinkCount}
                </div>
              </div>

              {/* Landmark Offsets */}
              <div className="realtime-metric-card">
                <div className="realtime-metric-header">
                  <div className="realtime-metric-icon-wrapper realtime-icon-cyan">
                    <Target className="realtime-metric-icon" />
                  </div>
                  <div>
                    <h3 className="realtime-metric-title">Landmark Offsets</h3>
                    <p className="realtime-metric-subtitle">Calibration Values</p>
                  </div>
                </div>
                <div className="realtime-offset-list">
                  <div className="realtime-offset-item">
                    <span>Horizontal:</span>
                    <span className="realtime-offset-value">+2.4px</span>
                  </div>
                  <div className="realtime-offset-item">
                    <span>Vertical:</span>
                    <span className="realtime-offset-value">-1.8px</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Performance Metrics Section */}
          <div className="realtime-performance-section">
            <h2 className="realtime-section-title">
              System Performance Overview
            </h2>
            
            <div className="realtime-performance-grid">
              
              {/* FPS */}
              <div className="realtime-performance-card">
                <div className="realtime-performance-icon realtime-icon-blue">
                  <Zap />
                </div>
                <h3 className="realtime-performance-title">Frame Rate</h3>
                <p className="realtime-performance-value realtime-value-blue">
                  {fps.toFixed(1)} FPS
                </p>
              </div>

              {/* Latency */}
              <div className="realtime-performance-card">
                <div className="realtime-performance-icon realtime-icon-cyan">
                  <Timer />
                </div>
                <h3 className="realtime-performance-title">Processing Latency</h3>
                <p className="realtime-performance-value realtime-value-cyan">
                  {latency.toFixed(1)} ms
                </p>
              </div>

              {/* System Confidence */}
              <div className="realtime-performance-card">
                <div className="realtime-performance-icon realtime-icon-purple">
                  <TrendingUp />
                </div>
                <h3 className="realtime-performance-title">Avg Confidence</h3>
                <p className="realtime-performance-value realtime-value-purple">
                  91.2%
                </p>
              </div>

              {/* Calibration Quality */}
              <div className="realtime-performance-card">
                <div className="realtime-performance-icon realtime-icon-green">
                  <Cpu />
                </div>
                <h3 className="realtime-performance-title">Calibration Quality</h3>
                <p className="realtime-performance-value realtime-value-green">
                  Excellent
                </p>
              </div>

            </div>
          </div>

          {/* Attention Heatmap Section */}
          {/*<div className="realtime-heatmap-section">
            <h2 className="realtime-section-title">
              User Attention Heatmap
            </h2>
            <p className="realtime-section-text">
              Real-time visualization of where you're looking most frequently. Red indicates high focus areas, blue shows low attention regions.
            </p>

            <div className="realtime-heatmap-container">
              <div className="realtime-heatmap-header">
                <h3 className="realtime-heatmap-title">Focus Intensity Map</h3>
                <div className="realtime-heatmap-time">
                  <span>Last 60 seconds</span>
                </div>
              </div>
              
              <div className="realtime-heatmap-grid">
                {heatmapData.map((intensity, i) => (
                  <div
                    key={i}
                    className="realtime-heatmap-cell"
                    style={{
                      backgroundColor: intensity > 0.7 
                        ? `rgba(239, 68, 68, ${intensity})` 
                        : intensity > 0.4 
                        ? `rgba(251, 191, 36, ${intensity})` 
                        : `rgba(59, 130, 246, ${intensity * 0.5})`
                    }}
                  ></div>
                ))}
              </div>

              <div className="realtime-heatmap-legend">
                <div className="realtime-legend-item">
                  <div className="realtime-legend-color realtime-legend-blue"></div>
                  <span>Low Focus</span>
                </div>
                <div className="realtime-legend-item">
                  <div className="realtime-legend-color realtime-legend-yellow"></div>
                  <span>Medium Focus</span>
                </div>
                <div className="realtime-legend-item">
                  <div className="realtime-legend-color realtime-legend-red"></div>
                  <span>High Focus</span>
                </div>
              </div>
            </div>
          </div>*/}

          {/* CTA Section */}
          <div className="realtime-cta-section">
            <h2 className="realtime-cta-title">
              Ready to Experience It Yourself?
            </h2>
            <p className="realtime-cta-text">
              Start tracking your gaze patterns and unlock powerful insights with our advanced eye-tracking technology.
            </p>
            <div className="realtime-cta-buttons">
              <button className="realtime-cta-btn realtime-cta-primary">
                Download Software
              </button>
              <button className="realtime-cta-btn realtime-cta-secondary">
                View Documentation
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RealTimeInsights;