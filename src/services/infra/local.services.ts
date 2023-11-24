import { ILocation } from '../interfaces/interface';
import { api } from '../structure/api';

export const getLocation = async (): Promise<ILocation[]> => {
  const { data } = await api.get<ILocation[]>('/unity');
  return data;
};

export const getLocationID = async (id: number): Promise<ILocation> => {
  const { data } = await api.get(`/unity/${id}`);
  return data;
};
