export const fetchUserData = async ({ userId }) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}`
  );
  const jsonData = await response.json();
  return [response, jsonData];
};

export const fetchUserFolderData = async ({ userId }) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/folders`
  );
  const jsonData = await response.json();
  return [response, jsonData];
};

export const fetchFolderLinks = async ({ userId, folderId }) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/links${
      folderId ? `?folderId=${folderId}` : ""
    }`
  );
  const jsonData = await response.json();
  const linksData = jsonData?.data;
  return [response, linksData];
};
