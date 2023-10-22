const API_URL = "https://bootcamp-api.codeit.kr/docs/api/";

export async function getFolders() {
  const response = await fetch(API_URL);
  const result = await response.json();
  return result;
}
