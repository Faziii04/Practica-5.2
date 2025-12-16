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
import './styles/components.css';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const { user } = useAuth();

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Route protection
  if (currentPage === 'dashboard' && !user) {
    return <Login onNavigate={navigate} />;
  }

  // Login page (no navbar/footer)
  if (currentPage === 'login') {
    return <Login onNavigate={navigate} />;
  }

  // Dashboard page (has its own layout with sidebar)
  if (currentPage === 'dashboard') {
    return (
      <div className="app-layout">
        <Navbar onNavigate={navigate} currentPage={currentPage} />
        <Dashboard onNavigate={navigate} />
      </div>
    );
  }

  // Home page (with navbar and footer)
  return (
    <div className="app-layout">
      <Navbar onNavigate={navigate} currentPage={currentPage} />
      <main className="main-content">
        <Home onNavigate={navigate} />
      </main>
      <Footer />
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
