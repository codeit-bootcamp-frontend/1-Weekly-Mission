import axios, { AxiosResponse } from 'axios';

const BASE_URL: string = 'https://bootcamp-api.codeit.kr/api';

export async function getUserProfile(): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.get(`${BASE_URL}/users/1`);
    return response.data;
  } catch (error) {
    throw new Error('유저 프로필 정보를 불러오지 못했습니다.');
  }
}

export async function getShared(): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.get(`${BASE_URL}/sample/folder`);
    return response.data;
  } catch (error) {
    throw new Error('카드 정보를 불러오지 못했습니다.');
  }
}

export async function getLinks({
                                 id = '',
                               }): Promise<any> {
  try {
    const query: string = `folderId=${id}`;
    const response: AxiosResponse<any> = await axios.get(`${BASE_URL}/users/1/links?${query}`);
    return response.data;
  } catch (error) {
    throw new Error('링크 정보를 불러오지 못했습니다.');
  }
}

export async function getFolders(): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.get(`${BASE_URL}/users/1/folders`);
    return response.data;
  } catch (error) {
    throw new Error('폴더 정보를 불러오지 못했습니다.');
  }
}
