import api from './api';

export const authenticate = async (email: string, password: string) => {
  return api.post('authenticate', { email, password });
};
