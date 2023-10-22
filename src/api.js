export const URL_BASE = "https://bootcamp-api.codeit.kr/api/sample";

export async function getFolderData() {
  const response = await fetch(`${URL_BASE}/folder`);
  if (!response.ok) {
    throw new Error("서버에서 데이터를 받지 못했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getUserData() {
  const response = await fetch(`${URL_BASE}/user`);
  if (!response.ok) {
    throw new Error("서버에서 데이터를 받지 못했습니다.");
  }

  const body = await response.json();
  return body;
}
