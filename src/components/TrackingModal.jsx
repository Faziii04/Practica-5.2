import React, { useState } from 'react';

export default function TrackingModal({ isOpen, onClose }) {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const mockTrackingData = {
    'ZH-001': {
      status: 'En Tránsito',
      origin: 'La Paz',
      destination: 'Santa Cruz',
      progress: 65,
      timeline: [
        { date: '15/12/2025 08:00', location: 'La Paz - Centro de Distribución', status: 'Paquete recogido', completed: true },
        { date: '15/12/2025 14:30', location: 'Oruro - Punto de Control', status: 'En tránsito', completed: true },
        { date: '16/12/2025 09:15', location: 'Cochabamba - Hub Central', status: 'En proceso', completed: true },
        { date: '17/12/2025', location: 'Santa Cruz - Centro de Distribución', status: 'Pendiente', completed: false },
        { date: '18/12/2025', location: 'Santa Cruz - Destino Final', status: 'Pendiente', completed: false },
      ]
    },
    'ZH-002': {
      status: 'Entregado',
      origin: 'Cochabamba',
      destination: 'Oruro',
      progress: 100,
      timeline: [
        { date: '14/12/2025 10:00', location: 'Cochabamba - Centro de Distribución', status: 'Paquete recogido', completed: true },
        { date: '14/12/2025 16:00', location: 'En ruta a Oruro', status: 'En tránsito', completed: true },
        { date: '15/12/2025 11:30', location: 'Oruro - Centro de Distribución', status: 'Llegada', completed: true },
        { date: '15/12/2025 14:00', location: 'Oruro - Destino Final', status: 'Entregado', completed: true },
      ]
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    
    setTimeout(() => {
      const result = mockTrackingData[trackingNumber];
      setTrackingResult(result || null);
      setIsSearching(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content tracking-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Rastrear Envío</h2>
          <button className="modal-close" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSearch} className="tracking-form">
          <div className="input-group">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
              placeholder="Ej: ZH-001"
              className="modern-input"
              disabled={isSearching}
            />
            <button type="submit" className="btn-primary" disabled={isSearching}>
              {isSearching ? 'Buscando...' : 'Rastrear'}
            </button>
          </div>
          <p className="hint-text">Ingrese el número de guía (Ej: ZH-001, ZH-002)</p>
        </form>

        {trackingResult && (
          <div className="tracking-results">
            <div className="tracking-header">
              <div className="tracking-info">
                <h3>Guía: {trackingNumber}</h3>
                <p>{trackingResult.origin} → {trackingResult.destination}</p>
              </div>
              <span className={`status-badge ${trackingResult.status.toLowerCase().replace(' ', '-')}`}>
                {trackingResult.status}
              </span>
            </div>

            <div className="progress-bar-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${trackingResult.progress}%` }}
                ></div>
              </div>
              <span className="progress-text">{trackingResult.progress}% Completado</span>
            </div>

            <div className="timeline">
              {trackingResult.timeline.map((event, index) => (
                <div key={index} className={`timeline-item ${event.completed ? 'completed' : 'pending'}`}>
                  <div className="timeline-marker">
                    {event.completed ? '✓' : '○'}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-date">{event.date}</div>
                    <div className="timeline-location">{event.location}</div>
                    <div className="timeline-status">{event.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {trackingResult === null && trackingNumber && !isSearching && (
          <div className="tracking-error">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <h3>Número de guía no encontrado</h3>
            <p>Por favor verifique el número ingresado.</p>
          </div>
        )}
      </div>
    </div>
  );
}
