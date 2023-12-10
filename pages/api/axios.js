import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/',
});

instance.interceptors.response.use(
  (success) => {
    console.log(success);
    return success;
  },
  (error) => {
    console.log(error.response.status);
    return error.response.status;
  }
);

export default instance;
