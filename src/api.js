export const URL_BASE = "https://bootcamp-api.codeit.kr/api/";

export async function getFolderData() {
  const response = await fetch(`${URL_BASE}sample/folder`);
  if (!response.ok) {
    throw new Error("서버에서 데이터를 받지 못했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getUserData() {
  const response = await fetch(`${URL_BASE}sample/user`);
  if (!response.ok) {
    throw new Error("서버에서 데이터를 받지 못했습니다.");
  }

  const body = await response.json();
  return body;
}

export async function getSelectItems() {
  const response = await fetch(`${URL_BASE}users/1/folders`);
  if (!response.ok) {
    throw new Error("서버에서 데이터를 받지 못했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getUserLogin() {
  const response = await fetch(`${URL_BASE}users/1`);
  if (!response.ok) {
    throw new Error("서버에서 데이터를 받지 못했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getUserLinks() {
  const response = await fetch(`${URL_BASE}users/1/links`);
  if (!response.ok) {
    throw new Error("서버에서 데이터를 받지 못했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getRenderLinks(id) {
  const URL_FOLDER =
    "https://bootcamp-api.codeit.kr/api/users/1/links?folderId=";
  const response = await fetch(`${URL_FOLDER}${id}`);
  if (!response.ok) {
    throw new Error("서버에서 데이터를 받지 못했습니다");
  }
  const body = await response.json();
  return body;
}
