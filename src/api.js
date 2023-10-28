const URL = 'https://bootcamp-api.codeit.kr/api/';

export async function getSampleFolderDatas() {
  const response = await fetch(`${URL}sample/folder`);
  // if (response.status !== 200) {
  //   throw new Error('데이터를 불러오는데 실패했습니다');
  // }
  const body = await response.json();
  return body;
}

export async function getSampleUserData() {
  const response = await fetch(`${URL}sample/user`);
  // if (response.status !== 200) {
  //   throw new Error('데이터를 불러오는데 실패했습니다');
  // }
  const body = await response.json();
  return body;
}

export async function getUserFolder() {
  const response = await fetch(`${URL}users/1/folders`);
  const body = await response.json();
  return body;
}

export async function getUserLinks(id = '') {
  const response = await fetch(`${URL}users/1/links?folderId=${id}`);
  const body = await response.json();
  return body;
}
