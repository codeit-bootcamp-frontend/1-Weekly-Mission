const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getAccount() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  if (!response.ok) {
    throw new Error("계정을 불러오는데 실패하였습니다.");
  }
  const body = await response.json();
  return body;
}

export async function getFolder() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패하였습니다.");
  }
  const body = await response.json();
  return body;
}

export async function getFolderInformations() {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패하였습니다.");
  }
  const body = await response.json();
  return body;
}

export async function getFolders() {
  const response = await fetch(`${BASE_URL}/users/1/lists`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패하였습니다.");
  }
  const body = await response.json();
  return body;
}
