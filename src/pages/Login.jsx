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
    <div className="page-container login-page">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <p>Portal Zambrana Hnos</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Usuario</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ej: admin"
            />
          </div>
          
          <div className="form-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ej: 123"
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button">Ingresar</button>
        </form>
        
        <button onClick={() => onNavigate('home')} className="back-button">
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}
