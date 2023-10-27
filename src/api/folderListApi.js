async function requestAPI(url) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/1/${url}`
  );
  const result = await response.json();
  return result;
}

export async function getFolderList() {
  const body = await requestAPI("folders");
  return body;
}

export async function getTotalFolder() {
  const body = await requestAPI("links");
  return body;
}
