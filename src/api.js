const API_URL = "https://bootcamp-api.codeit.kr";

const DEFAULT_USER_ID = 1;
export async function getData(response) {
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
export async function getSample(category) {
  const response = await fetch(`${API_URL}/api/sample/${category}`);
  return getData(response);
}

export async function getUser(user_id = DEFAULT_USER_ID) {
  const response = await fetch(`${API_URL}/api/users/${user_id}`);
  return getData(response);
}

export async function getFolders(user_id = DEFAULT_USER_ID) {
  const response = await fetch(`${API_URL}/api/users/${user_id}/folders`);
  return getData(response);
}

export async function getLinksByFolderID(
  user_id = DEFAULT_USER_ID,
  folder_id = undefined
) {
  const queryParams = folder_id !== undefined ? `${folder_id}` : "";

  const response = await fetch(
    `${API_URL}/api/users/${user_id}/links?folderId=${queryParams}`
  );

  return getData(response);
}

export default getSample;
