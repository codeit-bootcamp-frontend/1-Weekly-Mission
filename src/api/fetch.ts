import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/',
});

const fetch = async (options: AxiosRequestConfig) => {
  const response = api({ ...options });
  return await response;
};

export default fetch;
