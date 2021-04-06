import { AxiosResponse } from 'axios';
import { IAuthResponse } from '../Models/auth';
import api from './api';

export const authenticate = async (
  email: string,
  password: string,
): Promise<AxiosResponse<IAuthResponse>> => {
  return api.post('authenticate', { email, password });
};
