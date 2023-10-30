export async function getFolder() {
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

export async function getLinkList() {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/users/1/links'
  );
  const body = await response.json();
  return body;
}

export async function getLinkListByFolder(folderId) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/1/links?folderId={${folderId}}`
  );
  const body = await response.json();
  return body;
}

export async function getUser() {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/users/1');
  const body = await response.json();
  return body;
}
