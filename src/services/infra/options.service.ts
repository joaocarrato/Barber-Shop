import { IServices } from '../interfaces/interface';
import { api } from '../structure/api';

export const getOptions = async (): Promise<IServices[]> => {
  const { data } = await api.get<IServices[]>('/services');
  return data;
};
