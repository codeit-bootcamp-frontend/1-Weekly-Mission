import axios from 'axios';
import { BASE_URL } from 'apis/config/default';

export const defaultInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});
