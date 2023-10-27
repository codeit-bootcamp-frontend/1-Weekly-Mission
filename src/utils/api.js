const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

const URLS = {
  shared: {
    user: BASE_URL + '/sample/user',
    folder: BASE_URL + '/sample/folder',
  },
  folder: {
    user: BASE_URL + '/users/1',
    category: BASE_URL + '/users/1/folders',
    links: BASE_URL + '/users/1/links',
  }
}

export async function getData(page, type) {
  const response = await fetch(URLS[page][type]);
  if (!response.ok) {
    throw new Error('리뷰를 불러오는데 실패했습니다.')
  }
  const body = response.json();
  return body;
}