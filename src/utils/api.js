export const API_URL = "https://bootcamp-api.codeit.kr/api";

export async function getAccount() {
  const response = await fetch(`${API_URL}/sample/user`);
  const body = await response.json();

  if (!response.ok) throw new Error("사용자 정보를 불러오는데 실패했습니다.");
  return body;
}

export async function getFolder() {
  const response = await fetch(`${API_URL}/sample/folder`);
  const body = await response.json();

  if (!response.ok) throw new Error("폴더 정보를 불러오는데 실패했습니다.");
  return body;
}
