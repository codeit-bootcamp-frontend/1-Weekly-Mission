const BASE_URL = 'https://bootcamp-api.codeit.kr/api/';

export async function getResponse(path) {
  const response = await fetch(`${BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error('정보를 가져오지 못했습니다!! 에러!!');
  }
  const body = await response.json();
  return body;
}