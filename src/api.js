const usersAPI = "https://bootcamp-api.codeit.kr/api/users/1";
const sampleAPI = "https://bootcamp-api.codeit.kr/api/sample";

export async function getLoginData() {
  const response = await fetch(usersAPI);
  if (!response.ok) {
    throw new Error("로그인 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getSampleData() {
  const response = await fetch(sampleAPI + "/folder");
  if (!response.ok) {
    throw new Error("샘플 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getFolderData() {
  const response = await fetch(usersAPI + "/folders");
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getFolderListData(id) {
  let url = `${usersAPI}/links`;
  console.log(id);
  if (id !== -1) url += `?folderId=${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("폴더 링크 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
