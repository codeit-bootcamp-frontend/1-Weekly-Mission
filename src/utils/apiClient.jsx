const DEFAULT_USER_ID = 1;

async function requestAPI(url) {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/${url}`);
  const result = await response.json();
  return result;
}

export async function getSharedFolder() {
  const data = await requestAPI('sample/folder');
  return data;
}

export const createUserAPI = (userId) => async (path) => {
  if (!path) {
    const data = await requestAPI(`users/${userId}`);
    return data;
  }
  const data = await requestAPI(`users/${userId}/${path}`);
  return data;
};

export async function getUser(userId) {
  const data = await requestAPI(`users/${userId ?? DEFAULT_USER_ID}`);
  return data;
}
