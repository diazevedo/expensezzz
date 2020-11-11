import axios from 'axios';

const url = {
  production: '',
  // development: 'http://localhost:3333',
  development: 'http://192.168.0.2:3333',
};

const api = axios.create({ baseURL: url.development });

export default api;
