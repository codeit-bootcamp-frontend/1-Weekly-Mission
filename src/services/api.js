export async function getFolderData() {
  const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const body = await res.json();
  return body;
}

export async function getUserData() {
  const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
  const body = await res.json();
  return body;
}
