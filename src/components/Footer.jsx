import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Zambrana Hnos</h3>
          <p>Soluciones logísticas integrales para toda Bolivia. Conectando el país desde 2005.</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li>Servicios</li>
            <li>Rastreo</li>
            <li>Cotizaciones</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Av. Blanco Galindo Km 5</p>
          <p>Cochabamba, Bolivia</p>
          <p>+591 4 444-4444</p>
          <p>info@zambranahnos.bo</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zambrana Hnos Logística S.R.L. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
