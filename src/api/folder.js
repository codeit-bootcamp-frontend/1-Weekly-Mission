export async function getfoldersData() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData;
  }
}
