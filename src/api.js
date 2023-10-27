const sampleAPI = "https://bootcamp-api.codeit.kr/api/sample";

export async function getLoginData() {
  const response = await fetch(sampleAPI + "/user");
  if (!response.ok) {
    throw new Error("로그인 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getFolderData() {
  const response = await fetch(sampleAPI + "/folder");
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
