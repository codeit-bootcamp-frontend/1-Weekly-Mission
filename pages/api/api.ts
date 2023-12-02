import { FolderRawData, LinkRawData, SampleFolderRawData, UserRawData } from './type';

const BASE_URL = 'https://bootcamp-api.codeit.kr/api';
const USER_ID = `users/1`;

export async function getUserProfile(): Promise<UserRawData> {
  const response = await fetch(`${BASE_URL}/${USER_ID}`);
  if (!response.ok) {
    throw new Error('User Profile Error');
  }
  return await response.json();
}

export async function getLinks(id = ''): Promise<LinkRawData> {
  let url: string = '';
  if (id === '') {
    url = `${BASE_URL}/${USER_ID}/links`;
  } else {
    const query = `?folderId=${id}`;
    url = `${BASE_URL}/${USER_ID}/links${query}`;
  }
  const response = await fetch(`${url}`);
  if (!response.ok) {
    throw new Error('Cards Error');
  }
  return await response.json();
}

export async function getFolders(): Promise<FolderRawData> {
  const response = await fetch(`${BASE_URL}/${USER_ID}/folders`);
  if (!response.ok) {
    throw new Error('Folders Error');
  }
  return await response.json();
}

export async function getSampleFolders(): Promise<SampleFolderRawData> {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error('Sample Error');
  }
  return await response.json();
}
