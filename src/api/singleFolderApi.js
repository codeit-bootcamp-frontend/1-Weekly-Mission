export async function requestSingleFolderApi(id) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${id}`
  );
  const result = await response.json();
  return result;
}
