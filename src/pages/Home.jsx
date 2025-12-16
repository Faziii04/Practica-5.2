import React from 'react';

export default function Home({ onNavigate }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Logística Sin Fronteras en Bolivia</h1>
          <p>
            Conectamos sus negocios con el mundo. Transporte seguro, eficiente y puntual 
            a los 9 departamentos del país.
          </p>
          <div className="hero-buttons">
            <button onClick={() => onNavigate('login')} className="btn-primary large">
              Cotizar Envío
            </button>
            <button className="btn-outline large">
              Rastrear Carga
            </button>
          </div>
        </div>
        <div className="hero-image-placeholder">
          {/* Abstract representation of logistics/map */}
          <div className="truck-animation">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <span className="stat-number">15+</span>
          <span className="stat-label">Años de Experiencia</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">50k+</span>
          <span className="stat-label">Envíos Completados</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">9</span>
          <span className="stat-label">Departamentos Cubiertos</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Soporte Activo</span>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2>Nuestras Soluciones</h2>
          <p>Adaptamos nuestros servicios a las necesidades de su cadena de suministro.</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <h3>Almacenaje</h3>
            <p>Centros de distribución estratégicos en el eje troncal para gestión de inventarios.</p>
          </div>
          
          <div className="service-card">
            <div className="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <h3>Transporte Terrestre</h3>
            <p>Flota moderna de camiones de alto tonelaje y vehículos ligeros para distribución.</p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <h3>Logística Inversa</h3>
            <p>Gestión eficiente de devoluciones y reciclaje de productos.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para optimizar su logística?</h2>
          <p>Únase a las empresas líderes que confían en Zambrana Hnos.</p>
          <button onClick={() => onNavigate('login')} className="btn-white">
            Comenzar Ahora
          </button>
        </div>
      </section>
    </div>
  );
}
