import { AxiosResponse } from 'axios';
import IProject from '../models/project';
import api from './api';

export const addProject = async (
  data: IProject,
): Promise<AxiosResponse<IProject>> => {
  return api.post('/projects', data);
};

export const updateProject = async (
  data: IProject,
): Promise<AxiosResponse<IProject>> => {
  return api.put(`/projects/${data._id}`, data);
};

export const deleteProject = async (
  id: string,
): Promise<AxiosResponse<string>> => {
  return api.delete(`/projects/${id}`);
};

export const getProject = async (
  id: string,
): Promise<AxiosResponse<IProject>> => {
  return api.get(`/projects/${id}`);
};

export const getProjects = async (): Promise<AxiosResponse<IProject[]>> => {
  return api.get('/projects');
};
