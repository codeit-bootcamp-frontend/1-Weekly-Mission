import { defaultInstance } from '../config/default';

const fetch = async (options: any) => {
  const client = defaultInstance({ ...options });
  await client;
  return client;
};

export default fetch;
