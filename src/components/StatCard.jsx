import React from 'react';

export default function StatCard({ icon, title, value, trend, change, color = 'primary', delay = 0 }) {
  const trendClass = trend === 'up' ? 'positive' : trend === 'down' ? 'negative' : 'neutral';
  
  return (
    <div className={`stat-card ${color} animate-in`} style={{ animationDelay: `${delay}ms` }}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-info">
        <h3>{title}</h3>
        <p className="stat-value">{value}</p>
        {change && (
          <span className={`stat-trend ${trendClass}`}>
            {trend === 'up' && '↑'}
            {trend === 'down' && '↓'}
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
