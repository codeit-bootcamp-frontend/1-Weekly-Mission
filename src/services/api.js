export default async function getFolderData(path) {
  const res = await fetch(`https://bootcamp-api.codeit.kr/api/${path}`);
  const body = await res.json();
  return body;
}
