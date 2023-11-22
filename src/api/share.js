export async function getShareData() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const jsonData = await response.json();
  return [response, jsonData];
}
