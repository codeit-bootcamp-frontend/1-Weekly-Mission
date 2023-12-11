import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/',
});

instance.interceptors.response.use(
  (success) => {
    return success;
  },
  (error) => {
    return error.response.status;
  }
);

export default instance;
