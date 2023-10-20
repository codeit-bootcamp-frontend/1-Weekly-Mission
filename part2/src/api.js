export async function getLogin() {
  const loginUrl = "https://bootcamp-api.codeit.kr/api/sample/user";
  const response = await fetch(loginUrl);
  const body = await response.json();
  return body;
}

export async function getFolder() {
  const folderUrl = "https://bootcamp-api.codeit.kr/api/sample/folder";
  const response = await fetch(folderUrl);
  const body = await response.json();
  return body;
}
