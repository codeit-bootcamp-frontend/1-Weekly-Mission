const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getProfile() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  if (!response.ok) {
    throw new Error("프로필을 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getSampleFolder() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("샘플 폴더를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getFolder(folderId = "") {
  const query = `folderId=${folderId}`;
  const response = await fetch(`${BASE_URL}/users/1/links?${query}`);
  if (!response.ok) {
    throw new Error("폴더를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getFolderList() {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error("폴더 목록을 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
