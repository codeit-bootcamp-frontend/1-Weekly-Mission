export const fetchUserData = async ({ userId }) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}`
  );
  return response.json();
};

export const fetchUserFolderData = async (userId) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/folder`
  );
  return response.json();
};
