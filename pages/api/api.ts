import axios from 'axios';
import { FolderRawData, LinkRawData, SampleFolderRawData, UserRawData } from './type';

const BASE_URL = 'https://bootcamp-api.codeit.kr/api';
const USER_ID = `users/1`;

export async function getUserProfile(): Promise<UserRawData> {
  const res = await axios.get(`${BASE_URL}/${USER_ID}`);
  const result = res.data;

  return result;
}

export async function getLinks(id = ''): Promise<LinkRawData> {
  let url: string = '';
  if (id === '') {
    url = `${BASE_URL}/${USER_ID}/links`;
  } else {
    const query = `?folderId=${id}`;
    url = `${BASE_URL}/${USER_ID}/links${query}`;
  }
  const response = await axios.get(`${url}`);
  const result = response.data;
  return result;
}

export async function getFolders(): Promise<FolderRawData> {
  const response = await axios.get(`${BASE_URL}/${USER_ID}/folders`);
  const result = response.data;
  return result.data;
}

export async function getSampleFolders(): Promise<SampleFolderRawData> {
  const response = await axios.get(`${BASE_URL}/sample/folder`);
  const result = response.data;
  return result;
}
