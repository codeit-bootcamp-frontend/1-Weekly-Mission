import { BASE_URL, USERS_ENDPOINT } from './services/config';

export const getUserFolders = async () => {
  let result;
  try {
    const response = await fetch(`${BASE_URL}${USERS_ENDPOINT}/1/folders`);
    result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  return result;
};

export const getUserLinks = async (folderId = '전체') => {
  let result;
  const query = folderId === '전체' ? '' : `?folderId=${folderId}`;
  try {
    const response = await fetch(
      `${BASE_URL}${USERS_ENDPOINT}/1/links${query}`,
    );
    result = await response.json();
  } catch (error) {
    console.log(error.message);
  }
  return result;
};
