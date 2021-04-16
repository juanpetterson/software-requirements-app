import { AxiosResponse } from 'axios';
import IUser from '../models/user';
import api from './api';

export const addUser = async (data: IUser): Promise<AxiosResponse<IUser>> => {
  return api.post('/users', data);
};

export const updateUser = async (
  data: IUser,
): Promise<AxiosResponse<IUser>> => {
  return api.put(`/users/${data._id}`, data);
};

export const deleteUser = async (
  id: string,
): Promise<AxiosResponse<string>> => {
  return api.delete(`/users/${id}`);
};

export const getUser = async (id: string): Promise<AxiosResponse<IUser>> => {
  return api.get(`/users/${id}`);
};

export const getUsers = async (): Promise<AxiosResponse<IUser[]>> => {
  return api.get('/users');
};
