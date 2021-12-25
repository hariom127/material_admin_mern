import axios from 'axios';
import { api } from './urlConfig';

const token = window.localStorage.getItem('token');
const language = 'en';
// create Intance of axios
const axiosInc = axios.create({
  baseURL: api,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    language
  }
});

axiosInc.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return config;
  }

  if (process.browser) {
    config = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `${token}`
      }
    };
  }
  return config;
});

export default axiosInc;
