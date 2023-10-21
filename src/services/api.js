export default async function getFolderData() {
  const res = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
  const body = await res.json();
  return body;
}
