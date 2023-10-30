const BASE_URL = 'https://bootcamp-api.codeit.kr/api';
const USER_ID = `users/1`;

export async function getUserProfile() {
  const response = await fetch(`${BASE_URL}/${USER_ID}`);
  if (!response.ok) {
    throw new Error('User Profile Error');
  }
  return await response.json();
}

export async function getCards(id = '') {
  let url = '';
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

export async function getFolders() {
  const response = await fetch(`${BASE_URL}/${USER_ID}/folders`);
  if (!response.ok) {
    throw new Error('Folders Error');
  }
  return await response.json();
}

export async function getSampleFolders() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error('Sample Error');
  }
  return await response.json();
}
