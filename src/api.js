export async function getUsers() {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/sample/user`
  );
  if (!response.ok) {
    throw new Error("프로필을 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getFolder() {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/sample/folder`
  );
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
