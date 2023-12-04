import axios from 'axios';

export const DEFAULT_USER_ID = 1;
export const DEFAULT_FOLDER_ID = 0;

export const defaultInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
});
