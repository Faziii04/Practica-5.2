import React from 'react';

export default function Home({ onNavigate }) {
  return (
    <div className="page-container home-page">
      <header className="hero">
        <h1>Zambrana Hnos</h1>
        <p>Líderes en Logística y Transporte en Bolivia</p>
        <button onClick={() => onNavigate('login')} className="cta-button">
          Acceder al Portal
        </button>
      </header>
      
      <section className="services">
        <h2>Nuestros Servicios</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Transporte Nacional</h3>
            <p>Cobertura completa en los 9 departamentos de Bolivia.</p>
          </div>
          <div className="service-card">
            <h3>Carga Pesada</h3>
            <p>Flota moderna para transporte de gran tonelaje.</p>
          </div>
          <div className="service-card">
            <h3>Logística de Última Milla</h3>
            <p>Entregas rápidas y seguras hasta su puerta.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Sobre Nosotros</h2>
        <p>
          Con más de 20 años de experiencia, Zambrana Hnos se ha consolidado como
          el socio estratégico preferido para empresas bolivianas. Comprometidos
          con la puntualidad y la seguridad de su carga.
        </p>
      </section>

      <footer>
        <p>&copy; 2025 Zambrana Hnos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
