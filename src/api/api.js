const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export async function getCards() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error('Cards Error');
  }
  return await response.json();
}

export async function getUserProfile() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  if (!response.ok) {
    throw new Error('User Profile Error');
  }
  return await response.json();
}
