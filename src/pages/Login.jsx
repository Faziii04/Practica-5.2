import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Login({ onNavigate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      onNavigate('dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-split-left">
        <div className="brand-header">
          <h1>Zambrana Hnos</h1>
          <p>Logística & Transporte</p>
        </div>
        <div className="login-illustration">
          {/* Abstract truck/logistics graphic */}
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="login-svg">
            <path fill="#646cff" d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.3,-41.2C83.5,-26.8,87.7,-11.7,85.8,2.6C83.9,16.9,75.9,30.4,66.3,42.4C56.7,54.4,45.5,64.9,32.6,71.3C19.7,77.7,5.1,80,-8.6,78.3C-22.3,76.6,-35.1,70.9,-46.8,63.1C-58.5,55.3,-69.1,45.4,-76.3,33.2C-83.5,21,-87.3,6.5,-84.8,-7.1C-82.3,-20.7,-73.5,-33.4,-63.1,-43.8C-52.7,-54.2,-40.7,-62.3,-28.3,-69.8C-15.9,-77.3,-3.1,-84.2,10.2,-82.2C23.5,-80.2,45.7,-76.3,45.7,-76.3Z" transform="translate(100 100) scale(1.1)" opacity="0.1" />
            <path fill="#646cff" d="M10 60 L190 60 L190 140 L10 140 Z" opacity="0.8" />
            <circle cx="40" cy="140" r="15" fill="#333" />
            <circle cx="160" cy="140" r="15" fill="#333" />
          </svg>
        </div>
      </div>
      
      <div className="login-split-right">
        <div className="login-form-wrapper">
          <h2>Bienvenido de nuevo</h2>
          <p className="login-subtitle">Ingrese sus credenciales para acceder al portal</p>
          
          <form onSubmit={handleSubmit} className="modern-form">
            <div className="input-group">
              <label>Usuario</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ej: admin"
                className="modern-input"
              />
            </div>
            
            <div className="input-group">
              <label>Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="modern-input"
              />
            </div>

            {error && <div className="error-banner">{error}</div>}

            <button type="submit" className="btn-primary full-width">
              Iniciar Sesión
            </button>
          </form>
          
          <div className="login-footer">
            <button onClick={() => onNavigate('home')} className="btn-link">
              ← Volver al sitio principal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
