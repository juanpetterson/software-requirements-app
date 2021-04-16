import React, { createContext, useState, useEffect } from 'react';
import IUser from '../models/user';
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: IUser | null;
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStoredUser = async () => {
      const token = localStorage.getItem('@app/token');

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;

        const { data: user } = await api.get('/me');
        setUser(user);
      }
    };

    loadStoredUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await api.post('/authenticate', {
        email,
        password,
      });

      api.defaults.headers.Authorization = `Bearer ${data.token}`;
      localStorage.setItem('@app/token', data.token);
      setUser(data.user);
      setError(null);
    } catch ({ response }) {
      if (response.status === 401) {
        setError('Usuário e/ou senha incorretos');
      }
    }
  };

  const logout = async () => {
    setUser(null);
    api.defaults.headers.Authorization = ``;
    localStorage.removeItem('@app/token');
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{ signed: true, user, login, logout, error, clearError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
