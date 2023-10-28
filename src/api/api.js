const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export async function getCards() {
  const response = await fetch(`${BASE_URL}/users/1/links?folderId=16`); // 임시로 16
  if (!response.ok) {
    throw new Error('Cards Error');
  }
  return await response.json();
}

export async function getUserProfile() {
  const response = await fetch(`${BASE_URL}/users/1`);
  if (!response.ok) {
    throw new Error('User Profile Error');
  }
  return await response.json();
}

export async function getFolders() {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error('.Folders Error');
  }
  return await response.json();
}
