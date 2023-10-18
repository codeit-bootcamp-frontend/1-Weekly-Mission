const URL = 'https://bootcamp-api.codeit.kr/api/sample/user';

const RequestData = async () => {
  const response = await fetch(`${URL}`);
  if (!response.ok) {
    throw new Error('에러 발생');
  }
  const body = await response.json();
  return body;
};

export default RequestData;
