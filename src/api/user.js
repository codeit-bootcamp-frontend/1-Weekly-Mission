import axios from 'axios';

const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export async function getUserProfile() {
  try {
    const response = await axios.get(`${BASE_URL}/sample/user`);
    return response.data;
  } catch (error) {
    throw new Error('유저 프로필 정보를 불러오지 못했습니다.');
  }
}

export async function getCards() {
  try {
    const response = await axios.get(`${BASE_URL}/sample/folder`);
    return response.data;
  } catch (error) {
    throw new Error('카드 정보를 불러오지 못했습니다.');
  }
}
