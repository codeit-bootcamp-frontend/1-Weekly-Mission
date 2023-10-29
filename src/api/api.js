const BASE_URL = 'https://bootcamp-api.codeit.kr';

async function getUser() {
  try {
    const response = await fetch(`${BASE_URL}/api/sample/user`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.log(error);
  }
}

async function getUserFolders(user = 1) {
  try {
    const response = await fetch(`${BASE_URL}/api/users/${user}/folders`);
    const body = await response.json();
    const result = await body.data;
    return result;
  } catch (error) {
    console.log('error', error);
  }
}

async function getFolders(user = 1, folderId = '') {
  try {
    const response = await fetch(
      `${BASE_URL}/api/users/${user}/links${folderId}`
    );
    const body = await response.json();
    const result = await body.data;
    return result;
  } catch (error) {
    console.log('error', error);
  }
}

export { getUser, getFolders, getUserFolders };
