export async function getUsers() {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/sample/user`);
  const body = await response.json();
  return body;
}