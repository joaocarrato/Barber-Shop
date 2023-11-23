import axios from 'axios';

const URL: string = 'https://653157764d4c2e3f333cdd99.mockapi.io';

export const api = axios.create({
  baseURL: URL,
});
