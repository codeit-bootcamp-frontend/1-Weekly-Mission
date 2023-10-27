async function requestAPI(url) {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/${url}`);
  const result = await response.json();
  return result;
}

export async function getSharedFolder() {
  const data = await requestAPI('sample/folder');
  return data;
}

export async function getUser(userId) {
  const data = await requestAPI(`users/${userId}`);
  return data;
}

export async function getLinks(userId, folderId) {
  if (!folderId) {
    const data = await requestAPI(`users/${userId}/links`);
    return data;
  }
  const data = await requestAPI(`users/${userId}/links?folderId=${folderId}`);
  return data;
}

export async function getFolders(userId) {
  const data = await requestAPI(`users/${userId}/folders`);
  return data;
}
