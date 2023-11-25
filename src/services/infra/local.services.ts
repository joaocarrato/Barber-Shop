import { ILocation } from '../interfaces/interface';
import { api } from '../structure/api';

export const getLocation = async (): Promise<ILocation[]> => {
  const { data } = await api.get<ILocation[]>('/unity');
  console.log(data);
  return data;
};
