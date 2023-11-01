import axios from 'axios';
import { BASE_URL } from 'apis/config/default';

const defaultInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

const fetch = async (options) => {
  try {
    const client = defaultInstance({ ...options });
    await client;
    return client;
  } catch (error) {
    throw error;
  }
};

export default fetch;
