const BASE_URL = 'https://bootcamp-api.codeit.kr/api/';

export async function getData(url, id = '') {
  const response = await fetch(`${BASE_URL}${url}${id}`);
  if (response.status !== 200) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}
