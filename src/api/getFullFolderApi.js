export async function requestFullFolderApi() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );
  const result = await response.json();
  return result;
}
