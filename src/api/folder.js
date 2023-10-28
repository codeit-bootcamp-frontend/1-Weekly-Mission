import { BASE_URL, USERS_ENDPOINT } from './services/endpoints';

export const getUserFolders = async () => {
  let result;
  try {
    const response = await fetch(`${BASE_URL}${USERS_ENDPOINT}/1/folders`);
    result = await response.json();
  } catch (error) {
    console.log(error);
  }
  return result;
};

export const getUserLinks = async (folderId) => {
  let result;
  try {
    const response = await fetch(
      `${BASE_URL}${USERS_ENDPOINT}/1/links?folderId=${folderId}`,
    );
    result = await response.json();
  } catch (error) {
    console.log(error.message);
  }
  return result;
};
