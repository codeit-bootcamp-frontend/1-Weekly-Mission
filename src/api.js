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

export async function getRenderLinks(id = "") {
  const path = id === "" ? `/links` : `/links?folderId=${id}`;
  const response = await fetch(`${URL_BASE}/users/1${path}`);
  if (!response.ok) {
    throw new Error("서버에서 데이터를 받지 못했습니다");
  }
  const body = await response.json();
  return body;
}
