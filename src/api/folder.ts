interface FetchDataType {
  userId: string;
  folderId?: string;
}
export const fetchUserData = async ({
  userId,
}: {
  userId: FetchDataType;
}): Promise<[Response, FetchDataType]> => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}`
  );
  const jsonData = await response.json();
  return [response, jsonData];
};

export const fetchUserFolderData = async ({
  userId,
}: {
  userId: FetchDataType;
}) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/folders`
  );
  const jsonData = await response.json();
  return [response, jsonData];
};

export const fetchFolderLinks = async ({
  userId,
  folderId,
}: {
  userId: FetchDataType;
  folderId: FetchDataType;
}) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/links${
      folderId ? `?folderId=${folderId}` : ""
    }`
  );
  const jsonData = await response.json();
  const linksData = jsonData?.data;
  return [response, linksData];
};
