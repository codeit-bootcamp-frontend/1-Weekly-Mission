export const fetchUserData = async ({ userId }) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}`
  );
  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData;
  } else {
    throw new Error("Failed to fetch data");
  }
};

export const fetchUserFolderData = async ({ userId }) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/folders`
  );
  if (response.status === 200) {
    const jsonData = await response.json();
    return jsonData;
  } else {
    throw new Error("Failed to fetch data");
  }
};
