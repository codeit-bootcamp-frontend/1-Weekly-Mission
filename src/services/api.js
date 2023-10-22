const URL = 'https://bootcamp-api.codeit.kr/api/sample';

export const HeaderRequestData = async () => {
  const response = await fetch(`${URL}/user`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('헤더 프로필 에러 발생');
  }

  const body = await response.json();
  return body;
};

export const introRequestData = async () => {
  const response = await fetch(`${URL}/folder`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('인트로 프로필 에러 발생');
  }

  const body = await response.json();
  return body;
};

export default HeaderRequestData;
