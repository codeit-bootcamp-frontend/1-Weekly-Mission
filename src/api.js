export async function getDatas() {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/folder'
  );
  const body = await response.json();
  return body;
}
