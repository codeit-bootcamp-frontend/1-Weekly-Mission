const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

async function getFolderAccount() { 
  const response = await fetch(`${BASE_URL}/sample/user`);
  const result = await response.json();
  return result;
}

async function getFolderData() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  const result = await response.json();
  return result;
}

export { getFolderAccount, getFolderData };