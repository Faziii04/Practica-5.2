import { useState } from 'react';
import TrackingModal from '../components/TrackingModal';

function Home({ onNavigate }) {
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  const stats = [
    { value: '15+', label: 'Años de Experiencia' },
    { value: '50k+', label: 'Envíos Completados' },
    { value: '98%', label: 'Satisfacción del Cliente' },
    { value: '24/7', label: 'Soporte Disponible' }
  ];

  const services = [
    {
      icon: '🚚',
      title: 'Transporte Terrestre',
      description: 'Servicio de carga terrestre a nivel nacional con rutas optimizadas.',
      features: ['Carga completa', 'Carga consolidada', 'Entregas programadas']
    },
    {
      icon: '✈️',
      title: 'Logística Aérea',
      description: 'Envíos urgentes con nuestra red de transporte aéreo internacional.',
      features: ['Express 24hrs', 'Carga internacional', 'Documentación aduanera']
    },
    {
      icon: '📦',
      title: 'Almacenamiento',
      description: 'Bodegas seguras con tecnología de gestión de inventario.',
      features: ['Control de temperatura', 'Seguro incluido', 'Gestión de stock']
    },
    {
      icon: '🌎',
      title: 'Comercio Internacional',
      description: 'Facilitamos el comercio exterior con asesoría especializada.',
      features: ['Gestión aduanera', 'Certificaciones', 'Tracking global']
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      company: 'Importadora del Sur',
      text: 'Excelente servicio. Siempre puntuales y profesionales. Llevan nuestras importaciones con total seguridad.',
      rating: 5
    },
    {
      name: 'Carlos Pérez',
      company: 'Distribuidora Nacional',
      text: 'La mejor empresa de logística en Bolivia. Su sistema de tracking es muy útil y el equipo siempre está disponible.',
      rating: 5
    },
    {
      name: 'Ana Rodríguez',
      company: 'Exportaciones Andinas',
      text: 'Trabajamos con ellos hace 5 años. Confiables, eficientes y con excelentes tarifas.',
      rating: 5
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Soluciones Logísticas <span className="highlight">Integrales</span>
          </h1>
          <p>
            Conectamos tu negocio con Bolivia y el mundo. Transporte terrestre, aéreo y almacenamiento con la confiabilidad que tu empresa necesita.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => setIsTrackingOpen(true)}>
              Rastrear Envío
            </button>
            <button className="btn btn-secondary" onClick={() => onNavigate('login')}>
              Solicitar Cotización
            </button>
          </div>
        </div>
        <div className="hero-image-placeholder">
          <div className="floating-cards">
            <div className="floating-card card-1">
              <span className="card-icon">📦</span>
              <div className="card-text">
                <strong>Envío Rápido</strong>
                <span>24-48 horas</span>
              </div>
            </div>
            <div className="floating-card card-2">
              <span className="card-icon">✓</span>
              <div className="card-text">
                <strong>Entregado</strong>
                <span>La Paz, Bolivia</span>
              </div>
            </div>
            <div className="floating-card card-3">
              <span className="card-icon">🚚</span>
              <div className="card-text">
                <strong>En Tránsito</strong>
                <span>Santa Cruz → Cochabamba</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-number">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2>Nuestros Servicios</h2>
          <p>Soluciones logísticas completas adaptadas a las necesidades de tu empresa</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Lo Que Dicen Nuestros Clientes</h2>
        <p className="section-subtitle">La confianza de más de 500 empresas en Bolivia</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p>"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para Optimizar tu Logística?</h2>
          <p>
            Únete a las empresas que confían en Zambrana Hnos para sus necesidades de transporte y almacenamiento
          </p>
          <button className="btn btn-primary btn-large" onClick={() => onNavigate('login')}>
            Comenzar Ahora
          </button>
        </div>
      </section>
      
      <TrackingModal 
        isOpen={isTrackingOpen} 
        onClose={() => setIsTrackingOpen(false)} 
      />
    </div>
  );
}

export default Home;
