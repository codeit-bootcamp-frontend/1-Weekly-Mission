import { requestAPI } from '../api';

// 엑세스토큰으로 현재 로그인한 유저의 정보를 요청
const getUser = async () => {
  const response = await requestAPI('users', {
    headers: {
      Authorization: localStorage.getItem('accessToken'),
    },
  });

  return response;
};

export default getUser;
