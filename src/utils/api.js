const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

const URLS = {
  SHARED_USER: BASE_URL + '/sample/user',
  SHARED_FOLDER: BASE_URL + '/sample/folder',
  SHARED_FOLDERNAME: BASE_URL + '/sample/folder',
  FOLDER_USER: BASE_URL + '/users/1',
  FOLDER_CATEGORY: BASE_URL + '/users/1/folders',
  FOLDER_LINKS: BASE_URL + '/users/1/links',
}

export async function getData(type) {
  try {
    const response = await fetch(URLS[type]);
    const body = await response.json();
    return { type: `${type}`, payload: body };
  } catch (error) {
    console.error(error);
    return { type: 'FETCH_ERROR', payload: error }
  }
}