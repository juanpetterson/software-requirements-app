import { AxiosResponse } from 'axios';
import IUser from '../Models/user';
import api from './api';

export const addUser = async (data: IUser): Promise<IUser> => {
  return api.post('/users', data);
};

export const updateUser = async (data: IUser): Promise<IUser> => {
  return api.post(`/users/${data.id}`, data);
};

export const deleteUser = async (data: IUser): Promise<IUser> => {
  return api.delete(`/users/${data.id}`);
};

export const getUser = async (id: string): Promise<IUser> => {
  return api.get(`/users/${id}`);
};

export const getUsers = async (): Promise<AxiosResponse> => {
  return api.get('/users');
};
