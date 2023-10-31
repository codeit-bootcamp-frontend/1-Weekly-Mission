import axios from 'axios';

const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export async function getUserProfile() {
  try {
    const response = await axios.get(`${BASE_URL}/users/1`);
    return response.data;
  } catch (error) {
    throw new Error('유저 프로필 정보를 불러오지 못했습니다.');
  }
}

export async function getShared() {
  try {
    const response = await axios.get(`${BASE_URL}/sample/folder`);
    return response.data;
  } catch (error) {
    throw new Error('카드 정보를 불러오지 못했습니다.');
  }
}

export async function getLinks({
                                 id = '',
                               }) {
  try {
    const query = `folderId=${id}`;
    const response = await axios.get(`${BASE_URL}/users/1/links?${query}`);
    return response.data;
  } catch (error) {
    throw new Error('링크 정보를 불러오지 못했습니다.');
  }
}

export async function getFolders() {
  try {
    const response = await axios.get(`${BASE_URL}/users/1/folders`);
    return response.data;
  } catch (error) {
    throw new Error('폴더 정보를 불러오지 못했습니다.');
  }
}
