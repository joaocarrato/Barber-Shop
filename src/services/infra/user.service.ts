import { IUser } from '../interfaces/interface';
import { userApi } from '../structure/userApi';

export const getUser = async (): Promise<IUser> => {
  const { data } = await userApi.get('/users');
  return data; // Acesse diretamente a propriedade 'users' dos dados retornados
};
