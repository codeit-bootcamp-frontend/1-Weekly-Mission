const BASE_URL = 'https://bootcamp-api.codeit.kr';


export async function getSample(type) {
  const response = await fetch(`${BASE_URL}/api/sample/${type}`);
  if (!response.ok) {
    throw new Error('리뷰를 불러오는데 실패했습니다.')
  }
  const body = response.json();
  return body;
}