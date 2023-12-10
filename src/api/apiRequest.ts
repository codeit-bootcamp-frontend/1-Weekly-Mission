import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const apiRequest = async (options: AxiosRequestConfig) => {
  const response = await api({ ...options });
  return response;
};

export default apiRequest;
