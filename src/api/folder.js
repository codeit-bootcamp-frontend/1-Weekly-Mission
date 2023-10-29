export async function getEachfoldersData({ folderId }) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${folderId}`
  );
  if (response.status === 200) {
    const jsonData = await response.json();
    const data = jsonData.data;
    return data;
  }
}
