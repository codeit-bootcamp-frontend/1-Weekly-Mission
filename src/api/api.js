const BASE_URL = `https://bootcamp-api.codeit.kr`;
const USER_ID = 1;

export async function getUser() {
  const response = await fetch(`${BASE_URL}/api/users/${USER_ID}`);
  const body = await response.json();
  return body;
}

export async function getFolder() {
  const response = await fetch(`${BASE_URL}/api/sample/folder`);
  const body = await response.json();
  return body;
}
