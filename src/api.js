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

export async function getFolders(user_id = DEFAULT_USER_ID) {
  const response = await fetch(`${API_URL}/api/users/${user_id}/folders`);
  return getData(response);
}
export async function getLinksByFolderID(folder_id, user_id = DEFAULT_USER_ID) {
  const response = await fetch(
    `${API_URL}/api/users/${user_id}/links?folderId=${folder_id}`
  );
  return getData(response);
}

export default getSample;
