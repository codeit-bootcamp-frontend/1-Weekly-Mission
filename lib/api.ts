const BASE_URL = 'https://bootcamp-api.codeit.kr/api/';

export async function getResponse(path: string, query: string = ''): Promise<any> {
  const response = await fetch(`${BASE_URL}${path}${query}`);
  if (!response.ok) {
    throw new Error('정보를 가져오지 못했습니다!! 에러!!');
  }
  const body = await response.json();
  return body;
}

export async function post(path: string, content: any): Promise<any> {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/JSON',
    },
    body: JSON.stringify(content),
  });
  if (response.status == 200) {
    const responseData = await response.json();
    window.localStorage.setItem(path, responseData.data.accessToken);
  }
  return response.status;
}
