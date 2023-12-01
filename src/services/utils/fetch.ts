import axios from 'axios';

const defaultInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
});

const fetch = async (options: any) => {
  const client = defaultInstance({ ...options });
  await client;
  return client;
};

export default fetch;
