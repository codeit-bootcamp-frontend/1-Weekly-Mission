const API_URL = "https://bootcamp-api.codeit.kr/api/";

export async function getUserData() {
  const response = await fetch(`${API_URL}sample/user`);
  if (!response.ok) {
    throw new Error("사용자 데이터를 불러오는데 실패했습니다.");
  }
  const data = await response.json();
  return data;
}

export async function getFolders() {
  const response = await fetch(`${API_URL}sample/folder`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const data = await response.json();
  return data;
}
