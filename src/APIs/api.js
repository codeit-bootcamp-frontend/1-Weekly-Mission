async function getUserAccount() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/userasd"
  );
  if (!response.ok) {
    throw new Error("사용자 정보 받아오기를 실패했습니다.");
  }
  return await response.json();
}

async function getFolderData() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  if (!response.ok) {
    throw new Error("폴더 데이터 받아오기를 실패했습니다.");
  }
  return await response.json();
}

export { getUserAccount, getFolderData };
