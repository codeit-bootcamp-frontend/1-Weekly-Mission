const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

const URLS = {
  shared: {
    user: BASE_URL + '/sample/user',
    folder: BASE_URL + '/sample/folder',
    folderName: BASE_URL + '/sample/folder',
  },
  folder: {
    user: BASE_URL + '/users/1',
    category: BASE_URL + '/users/1/folders',
    links: BASE_URL + '/users/1/links',
  }
}

export async function getData(page, type) {
  try {
    const response = await fetch(URLS[page][type]);
    const body = await response.json();
    return { type: `${page}_${type}`, payload: body };
  } catch (error) {
    console.error(error);
    return { type: 'FETCH_ERROR', payload: error }
  }
}