const API_URL = "https://bootcamp-api.codeit.kr/docs/api/sample/";

export async function getUserData() {
  const response = await fetch(`${API_URL}user`);
  const result = await response.json();
  return result;
}

export async function getFolders() {
  const response = await fetch(`${API_URL}folder`);
  const result = await response.json();
  return result;
}
