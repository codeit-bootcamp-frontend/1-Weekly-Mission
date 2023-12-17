import { AxiosBasicCredentials } from 'axios';
import { defaultInstance } from '../config/default';

export interface axiosOptions {
  url?: string;
  method?: string;
  params?: {
    [param: string]: string | number | boolean;
  };
  data?: {
    [data: string]: string | number | boolean;
  };
  headers?: {
    Authorization?: string;
  };
}

const api = async <T>(options: axiosOptions) => {
  const client = defaultInstance({ ...options });
  const res = await client;
  const data: T = res.data;
  return data;
};

export default api;
