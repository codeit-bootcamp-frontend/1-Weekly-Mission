const SAMPLE_URL = 'https://bootcamp-api.codeit.kr/api/sample/';

export async function getSampleFolderDatas() {
  const response = await fetch(`${SAMPLE_URL}folder`);
  if (response.status !== 200) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function getSampleUserData() {
  const response = await fetch(`${SAMPLE_URL}user`);
  if (response.status !== 200) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}
