import React from 'react';

export default function NotificationBell({ onNavigate }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const notifications = [
    { id: 1, type: 'success', message: 'Envío ZH-002 entregado exitosamente', time: 'Hace 2 horas', unread: true },
    { id: 2, type: 'warning', message: 'Envío ZH-005 presenta retraso', time: 'Hace 3 horas', unread: true },
    { id: 3, type: 'info', message: 'Nueva cotización disponible', time: 'Hace 5 horas', unread: false },
    { id: 4, type: 'success', message: 'Factura #1234 generada', time: 'Ayer', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="notification-container">
      <button 
        className="notification-bell"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
      </button>

      {isOpen && (
        <div className="notification-dropdown">
          <div className="notification-header">
            <h3>Notificaciones</h3>
            <button className="btn-text-small">Marcar todas como leídas</button>
          </div>
          <div className="notification-list">
            {notifications.map(notif => (
              <div key={notif.id} className={`notification-item ${notif.unread ? 'unread' : ''}`}>
                <div className={`notification-icon ${notif.type}`}>
                  {notif.type === 'success' && '✓'}
                  {notif.type === 'warning' && '⚠'}
                  {notif.type === 'info' && 'ℹ'}
                </div>
                <div className="notification-content">
                  <p>{notif.message}</p>
                  <span className="notification-time">{notif.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="notification-footer">
            <button className="btn-text">Ver todas las notificaciones</button>
          </div>
        </div>
      )}
    </div>
  );
}
