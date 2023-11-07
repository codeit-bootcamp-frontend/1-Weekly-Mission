import { API_URL } from '../components/constants.js';

const getUserData = async () => {
  const response = await fetch(`${API_URL}sample/user`);
  if (!response.ok) {
    throw new Error('사용자 데이터를 불러오는데 실패했습니다.');
  }
  const data = await response.json();
  return data;
};

export default getUserData;
