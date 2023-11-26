const URL = `https://bootcamp-api.codeit.kr/api/`;

export default async function getData(path: string) {
  const res = await fetch(`${URL + path}`);
  const body = await res.json();
  return body;
}
