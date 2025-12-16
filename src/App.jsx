import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';
import './styles/home.css';
import './styles/login.css';
import './styles/dashboard.css';
import './styles/footer.css';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const { user } = useAuth();

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Protección de rutas simple
  if (currentPage === 'dashboard' && !user) {
    return <Login onNavigate={navigate} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onNavigate={navigate} />;
      case 'dashboard':
        return <Dashboard onNavigate={navigate} />;
      case 'home':
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  const isLoginPage = currentPage === 'login';

  return (
    <div className="app-layout">
      {!isLoginPage && <Navbar onNavigate={navigate} currentPage={currentPage} />}
      <main className="main-content">
        {renderPage()}
      </main>
      {!isLoginPage && currentPage !== 'dashboard' && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
