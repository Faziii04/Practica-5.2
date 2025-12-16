import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import StatCard from '../components/StatCard';
import CircularProgress from '../components/CircularProgress';

function Dashboard({ onNavigate }) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Envíos Activos', value: '127', change: '+12%', trend: 'up', icon: '📦' },
    { title: 'Entregas Hoy', value: '43', change: '+8%', trend: 'up', icon: '🚚' },
    { title: 'En Tránsito', value: '84', change: '-3%', trend: 'down', icon: '🛣️' },
    { title: 'Completados', value: '3,247', change: '+23%', trend: 'up', icon: '✓' }
  ];

  const performanceMetrics = [
    { label: 'Entregas a Tiempo', value: 96, color: '#24a148' },
    { label: 'Satisfacción del Cliente', value: 94, color: '#0f62fe' },
    { label: 'Utilización de Flota', value: 87, color: '#f1c21b' }
  ];

  const recentActivity = [
    { id: 1, title: 'Entrega completada', description: 'Envío #ZH-8472 entregado en La Paz', time: 'Hace 5 minutos', icon: '✓', color: 'success' },
    { id: 2, title: 'Recolección programada', description: 'Nuevo envío desde Santa Cruz', time: 'Hace 15 minutos', icon: '📦', color: 'info' },
    { id: 3, title: 'Retraso menor', description: 'Envío #ZH-8451 retrasado 30 min', time: 'Hace 1 hora', icon: '⚠️', color: 'warning' },
    { id: 4, title: 'Actualización de ruta', description: 'Ruta optimizada para 8 envíos', time: 'Hace 2 horas', icon: '🛣️', color: 'info' }
  ];

  const shipments = [
    { id: 'ZH-8472', destination: 'La Paz', status: 'Entregado', date: '2024-01-15', driver: 'Juan Pérez', statusColor: 'success' },
    { id: 'ZH-8471', destination: 'Cochabamba', status: 'En Tránsito', date: '2024-01-15', driver: 'María García', statusColor: 'warning' },
    { id: 'ZH-8470', destination: 'Santa Cruz', status: 'En Preparación', date: '2024-01-16', driver: 'Carlos López', statusColor: 'info' },
    { id: 'ZH-8469', destination: 'Tarija', status: 'Entregado', date: '2024-01-14', driver: 'Ana Rodríguez', statusColor: 'success' },
    { id: 'ZH-8468', destination: 'Oruro', status: 'En Tránsito', date: '2024-01-15', driver: 'Luis Martínez', statusColor: 'warning' }
  ];

  const menuItems = [
    { id: 'overview', label: 'Vista General', icon: '📊' },
    { id: 'shipments', label: 'Envíos', icon: '📦' },
    { id: 'fleet', label: 'Flota', icon: '🚚' },
    { id: 'reports', label: 'Reportes', icon: '📈' },
    { id: 'settings', label: 'Configuración', icon: '⚙️' }
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h3>Panel de Control</h3>
          <p>Bienvenido, {user?.name || 'Usuario'}</p>
        </div>
        
        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <small>Zambrana Hnos © 2024</small>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-topbar">
          <h2>Vista General</h2>
          <span className="date-display">
            {new Date().toLocaleDateString('es-BO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>

        {/* Stats Grid */}
        <div className="dashboard-grid stats-row">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Content Grid */}
        <div className="dashboard-content-grid">
          {/* Performance Metrics */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Métricas de Rendimiento</h3>
            </div>
            <div className="card-body metrics-list">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="metric-row">
                  <div className="metric-info">
                    <span className="metric-label">{metric.label}</span>
                    <span className="metric-value">{metric.value}%</span>
                  </div>
                  <CircularProgress value={metric.value} color={metric.color} />
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Actividad Reciente</h3>
              <button className="btn-link">Ver todo</button>
            </div>
            <div className="card-body activity-list">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className={`activity-icon ${activity.color}`}>
                    {activity.icon}
                  </div>
                  <div className="activity-details">
                    <strong>{activity.title}</strong>
                    <span>{activity.description}</span>
                    <small>{activity.time}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shipments Table */}
        <div className="dashboard-card full-width">
          <div className="card-header">
            <h3>Envíos Recientes</h3>
            <div className="header-actions">
              <input type="search" placeholder="Buscar envío..." className="search-input" />
              <button className="btn btn-primary">+ Nuevo Envío</button>
            </div>
          </div>
          <div className="card-body">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID Envío</th>
                  <th>Destino</th>
                  <th>Estado</th>
                  <th>Fecha</th>
                  <th>Conductor</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {shipments.map((shipment) => (
                  <tr key={shipment.id}>
                    <td><strong>{shipment.id}</strong></td>
                    <td>{shipment.destination}</td>
                    <td>
                      <span className={`status-badge ${shipment.statusColor}`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td>{shipment.date}</td>
                    <td>{shipment.driver}</td>
                    <td>
                      <div className="table-actions">
                        <button className="btn-icon" title="Ver">👁️</button>
                        <button className="btn-icon" title="Editar">✏️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
