import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  timeout: 12000,
  headers: { 'Content-Type': 'application/json' },
});

export default api;