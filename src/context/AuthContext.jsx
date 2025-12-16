import { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

// Usuarios simulados
const MOCK_USERS = [
  { username: 'admin', password: '123', name: 'Administrador', role: 'admin' },
  { username: 'cliente', password: '123', name: 'Juan Pérez', role: 'client' }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const login = (username, password) => {
    const foundUser = MOCK_USERS.find(u => u.username === username && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      setError('');
      return true;
    } else {
      setError('Credenciales inválidas');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
