import { IBarber } from '../interfaces/interface';
import { api } from '../structure/api';

export const getBarber = async (): Promise<IBarber[]> => {
  const { data } = await api.get<IBarber[]>('/users');
  return data;
};

export const getBarberID = async (id: string): Promise<IBarber> => {
  const { data } = await api.get<IBarber>(`/users/${id}`);
  return data;
};
