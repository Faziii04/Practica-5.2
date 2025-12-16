import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard({ onNavigate }) {
  const { user } = useAuth();

  // Datos simulados para el dashboard
  const shipments = [
    { id: 'ZH-001', origin: 'La Paz', destination: 'Santa Cruz', status: 'En Tránsito', eta: '2025-12-18', type: 'Carga Pesada' },
    { id: 'ZH-002', origin: 'Cochabamba', destination: 'Oruro', status: 'Entregado', eta: '2025-12-15', type: 'Paquetería' },
    { id: 'ZH-003', origin: 'Tarija', destination: 'Sucre', status: 'Pendiente', eta: '2025-12-20', type: 'Carga Pesada' },
    { id: 'ZH-004', origin: 'Santa Cruz', destination: 'Beni', status: 'En Tránsito', eta: '2025-12-19', type: 'Refrigerado' },
    { id: 'ZH-005', origin: 'Potosí', destination: 'La Paz', status: 'Retrasado', eta: '2025-12-21', type: 'Minerales' },
  ];

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="sidebar-menu">
          <button className="sidebar-item active">
            <span className="icon">📊</span> Resumen
          </button>
          <button className="sidebar-item">
            <span className="icon">📦</span> Envíos
          </button>
          <button className="sidebar-item">
            <span className="icon">👥</span> Clientes
          </button>
          <button className="sidebar-item">
            <span className="icon">🚛</span> Flota
          </button>
          <button className="sidebar-item">
            <span className="icon">📄</span> Facturación
          </button>
        </div>
        <div className="sidebar-footer">
          <p>v1.0.5</p>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <h2>Resumen General</h2>
          <div className="date-display">
            {new Date().toLocaleDateString('es-BO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </header>

        <div className="dashboard-grid">
          {/* Stats Cards */}
          <div className="stat-card primary">
            <div className="stat-icon">📦</div>
            <div className="stat-info">
              <h3>Envíos Activos</h3>
              <p className="stat-value">24</p>
              <span className="stat-trend positive">↑ 12% vs mes anterior</span>
            </div>
          </div>
          
          <div className="stat-card success">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <h3>Entregados</h3>
              <p className="stat-value">156</p>
              <span className="stat-trend positive">↑ 5% vs mes anterior</span>
            </div>
          </div>
          
          <div className="stat-card warning">
            <div className="stat-icon">⚠️</div>
            <div className="stat-info">
              <h3>Incidencias</h3>
              <p className="stat-value">3</p>
              <span className="stat-trend negative">↓ 2% vs mes anterior</span>
            </div>
          </div>

          <div className="stat-card info">
            <div className="stat-icon">🚛</div>
            <div className="stat-info">
              <h3>Flota Disponible</h3>
              <p className="stat-value">85%</p>
              <span className="stat-trend neutral">-- Estable</span>
            </div>
          </div>

          {/* Recent Shipments Table */}
          <div className="dashboard-card full-width">
            <div className="card-header">
              <h3>Últimos Movimientos</h3>
              <button className="btn-text">Ver todo</button>
            </div>
            <div className="table-responsive">
              <table className="modern-table">
                <thead>
                  <tr>
                    <th>ID Guía</th>
                    <th>Tipo</th>
                    <th>Ruta</th>
                    <th>Estado</th>
                    <th>ETA</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {shipments.map(shipment => (
                    <tr key={shipment.id}>
                      <td className="font-mono">{shipment.id}</td>
                      <td>{shipment.type}</td>
                      <td>
                        <div className="route-cell">
                          <span>{shipment.origin}</span>
                          <span className="arrow">→</span>
                          <span>{shipment.destination}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`status-badge ${shipment.status.toLowerCase().replace(' ', '-')}`}>
                          {shipment.status}
                        </span>
                      </td>
                      <td>{shipment.eta}</td>
                      <td>
                        <button className="btn-icon">⋮</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
