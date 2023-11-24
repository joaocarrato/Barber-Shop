export interface IBarber {
  name: string;
  avatar: string;
  vacation: boolean;
  speciality: string;
  rating: number;
  id: string;
  lastName: string;
  description: string;
}

export interface IUser {
  users: User[];
}

export interface User {
  name: string;
  username: string;
  password: string;
}
