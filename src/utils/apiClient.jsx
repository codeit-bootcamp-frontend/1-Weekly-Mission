import axios from 'axios';

const BASE_URL = 'https://bootcamp-api.codeit.kr/api/';

async function requestAPI(url) {
  const response = await axios.get(`${BASE_URL}${url}`);
  return response.data;
}

export async function getSharedFolder() {
  const data = await requestAPI('sample/folder');
  return data;
}

export async function getUser(userId) {
  const data = await requestAPI(`users/${userId}`);
  return data;
}

export async function getLinks(userId, folderId) {
  if (!folderId) {
    const data = await requestAPI(`users/${userId}/links`);
    return data;
  }
  const data = await requestAPI(`users/${userId}/links?folderId=${folderId}`);
  return data;
}

export async function getFolders(userId) {
  const data = await requestAPI(`users/${userId}/folders`);
  return data;
}
