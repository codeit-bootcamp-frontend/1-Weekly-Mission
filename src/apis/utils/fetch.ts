import axios from 'axios';

const defaultInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

const fetch = async (options: any) => {
  const client = defaultInstance({ ...options });
  await client;
  return client;
};

export default fetch;
