export async function getSharedLinkList() {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/folder'
  );
  return await response.json();
}

export async function getFolderList() {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/users/1/folders'
  );
  return await response.json();
}

export async function getLinkList(folderId) {
  let url = 'https://bootcamp-api.codeit.kr/api/users/1/links';
  if (folderId) {
    url += `?folderId=${folderId}`;
  }
  const response = await fetch(url);
  return await response.json();
}

export async function getUser() {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/users/1');
  return await response.json();
}
