import axios from 'axios';

const URL: string = 'http://localhost:3000';

export const userApi = axios.create({
  baseURL: URL,
});
