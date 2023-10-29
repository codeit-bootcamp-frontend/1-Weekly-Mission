const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getSample() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  const body = await response.json();
  const sampleData = body.folder; //folder객체>links
  return sampleData;
}

export async function getFolders() {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  const body = await response.json();
  const folderData = body.data; //data배열
  return folderData;
}

export async function getFolderLinks(folderID) {
  const query = `folderId={folderID}`;
  const response = await fetch(
    folderID
      ? `${BASE_URL}/users/1/links?${query}`
      : `${BASE_URL}/users/1/links`
  );
  const body = await response.json();
  const linkData = body.data; //data배열
  return linkData;
}

export async function getUser() {
  const response = await fetch(`${BASE_URL}/users/1`);
  const result = await response.json();
  const userData = result.data[0];
  return userData;
}
