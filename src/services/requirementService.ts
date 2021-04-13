import { AxiosResponse } from 'axios';
import IRequirement from '../models/requirement';
import api from './api';

export const addRequirement = async (
  data: IRequirement,
): Promise<AxiosResponse<IRequirement>> => {
  return api.post('/requirements', data);
};

export const updateRequirement = async (
  data: IRequirement,
): Promise<AxiosResponse<IRequirement>> => {
  return api.put(`/requirements/${data._id}`, data);
};

export const deleteRequirement = async (
  id: string,
): Promise<AxiosResponse<string>> => {
  return api.delete(`/requirements/${id}`);
};

export const getRequirement = async (
  id: string,
): Promise<AxiosResponse<IRequirement>> => {
  return api.get(`/requirements/${id}`);
};

export const getRequirements = async (
  projectId: string,
): Promise<AxiosResponse<IRequirement[]>> => {
  return api.get(`/requirements?projectId=${projectId}`);
};
