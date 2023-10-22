async function getUserAccount() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  const result = await response.json();
  return result;
}

async function getFolderData() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const result = await response.json();
  return result;
}

export { getUserAccount, getFolderData };
