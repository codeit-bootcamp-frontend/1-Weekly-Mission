// share 페이지에 뿌려주는거
export async function getShareDate() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData;
  } else {
    throw new Error("Failed to fetch data");
  }
}

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
