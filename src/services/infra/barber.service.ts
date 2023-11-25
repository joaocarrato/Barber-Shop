import { IBarber } from '../interfaces/interface';
import { api } from '../structure/api';

export const getBarber = async (): Promise<IBarber[]> => {
  const { data } = await api.get<IBarber[]>('/barber');
  return data;
};
