import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://nodejs-production-75cd.up.railway.app',
});
