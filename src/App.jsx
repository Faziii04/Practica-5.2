import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const { user } = useAuth();

  const navigate = (page) => {
    setCurrentPage(page);
  };

  // Protección de rutas simple
  if (currentPage === 'dashboard' && !user) {
    return <Login onNavigate={navigate} />;
  }

  switch (currentPage) {
    case 'login':
      return <Login onNavigate={navigate} />;
    case 'dashboard':
      return <Dashboard onNavigate={navigate} />;
    case 'home':
    default:
      return <Home onNavigate={navigate} />;
  }
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
