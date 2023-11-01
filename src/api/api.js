export async function getSharedLinkList() {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/folder'
  );
  const body = await response.json();
  return body;
}

export async function getFolderList() {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/users/1/folders'
  );
  const body = await response.json();
  return body;
}

export async function getLinkList(folderId) {
  let url = 'https://bootcamp-api.codeit.kr/api/users/1/links';
  if (folderId) {
    url += `?folderId=${folderId}`;
  }
  const response = await fetch(url);
  const body = await response.json();
  return body;
}

export async function getUser() {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/users/1');
  const body = await response.json();
  return body;
}
