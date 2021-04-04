import React, { createContext, useState } from 'react';
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  const login = async (email: string, password: string) => {
    const response = await api.post('/authenticate', {
      email,
      password,
    });

    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
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
