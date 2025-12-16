import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard({ onNavigate }) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    onNavigate('home');
  };

  // Datos simulados para el dashboard
  const shipments = [
    { id: 'ZH-001', origin: 'La Paz', destination: 'Santa Cruz', status: 'En Tránsito', eta: '2025-12-18' },
    { id: 'ZH-002', origin: 'Cochabamba', destination: 'Oruro', status: 'Entregado', eta: '2025-12-15' },
    { id: 'ZH-003', origin: 'Tarija', destination: 'Sucre', status: 'Pendiente', eta: '2025-12-20' },
  ];

  return (
    <div className="page-container dashboard-page">
      <header className="dashboard-header">
        <h2>Panel de Control</h2>
        <div className="user-info">
          <span>Bienvenido, <strong>{user?.name}</strong></span>
          <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
        </div>
      </header>

      <main className="dashboard-content">
        <div className="stats-row">
          <div className="stat-card">
            <h3>Envíos Activos</h3>
            <p className="stat-number">12</p>
          </div>
          <div className="stat-card">
            <h3>Entregados (Mes)</h3>
            <p className="stat-number">45</p>
          </div>
          <div className="stat-card">
            <h3>Eficiencia</h3>
            <p className="stat-number">98%</p>
          </div>
        </div>

        <section className="shipments-table-section">
          <h3>Últimos Envíos</h3>
          <table className="shipments-table">
            <thead>
              <tr>
                <th>ID Guía</th>
                <th>Origen</th>
                <th>Destino</th>
                <th>Estado</th>
                <th>Fecha Est.</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map(shipment => (
                <tr key={shipment.id}>
                  <td>{shipment.id}</td>
                  <td>{shipment.origin}</td>
                  <td>{shipment.destination}</td>
                  <td>
                    <span className={`status-badge ${shipment.status.toLowerCase().replace(' ', '-')}`}>
                      {shipment.status}
                    </span>
                  </td>
                  <td>{shipment.eta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
