const URL = 'https://bootcamp-api.codeit.kr/api/sample';

export const HeaderRequestData = async () => {
  const response = await fetch(`${URL}/user`);
  if (!response.ok) {
    throw new Error('헤더 프로필 에러 발생');
  }

  const body = await response.json();
  return body;
};

export const introRequestData = async () => {
  const response = await fetch(`${URL}/folder`);
  if (!response.ok) {
    throw new Error('인트로 프로필 에러 발생');
  }

  const body = await response.json();
  const result = body.folder;
  return result;
};

export default HeaderRequestData;
