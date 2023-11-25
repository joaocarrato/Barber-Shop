import { ISchedule } from '../interfaces/interface';
import { api } from '../structure/api';

export const getSchedule = async (): Promise<ISchedule[]> => {
  const { data } = await api.get<ISchedule[]>('/schedule');
  return data;
};
