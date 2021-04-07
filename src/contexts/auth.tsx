import React, { createContext, useState, useEffect } from 'react';
import IUser from '../Models/user';
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: IUser | null;
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const loadStoredUser = async () => {
      const token = localStorage.getItem('@app/token');

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;

        const { data: user } = await api.post('/me');
        setUser(user);
      }
    };

    loadStoredUser();
  }, []);

  const login = async (email: string, password: string) => {
    const { data } = await api.post('/authenticate', {
      email,
      password,
    });

    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    localStorage.setItem('@app/token', data.token);
    setUser(data.user);
  };

  const logout = async () => {
    setUser(null);
    api.defaults.headers.Authorization = ``;
  };

  return (
    <AuthContext.Provider value={{ signed: true, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
