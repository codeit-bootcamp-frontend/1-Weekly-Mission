import { requestAPI } from '../api';

// 특정 ID에 따른 유저의 정보를 요청
const getUserById = async (id) => {
  const response = await requestAPI(`users/${id}`);

  return response;
};

export default getUserById;
