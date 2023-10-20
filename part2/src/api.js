export async function getLogin() {
  const loginUrl = "https://bootcamp-api.codeit.kr/api/sample/user";
  const response = await fetch(loginUrl);
  const body = await response.json();
  return body;
}
