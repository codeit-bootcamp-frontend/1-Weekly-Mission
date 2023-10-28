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

async function getFolders() {
  try {
    const response = await fetch(`${BASE_URL}/api/sample/folder`);
    const body = await response.json();
    const result = await body.folder;
    return result;
  } catch (error) {
    console.log('error', error);
  }
}

export { getUser, getFolders };
