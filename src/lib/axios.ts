import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/',
  // withCredentials: true,
});

export default instance;
