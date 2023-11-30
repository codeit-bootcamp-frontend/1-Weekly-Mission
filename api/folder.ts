interface UserRequest {
  userId: string;
  folderId?: string;
}

const baseUrl = new URL("https://bootcamp-api.codeit.kr");
const getUrl = (path: string) => new URL(path, baseUrl);

export const fetchUserData = async ({ userId }: UserRequest) => {
  const requestUrl = getUrl(`/api/users/${userId}`);
  const response = await fetch(requestUrl);
  const jsonData = await response.json();
  return [response, jsonData];
};

export const fetchUserFolderData = async ({ userId }: UserRequest) => {
  const requestUrl = getUrl(`/api/users/${userId}/folders`);
  const response = await fetch(requestUrl);
  const jsonData = await response.json();
  return [response, jsonData];
};

export const fetchFolderLinks = async ({ userId, folderId }: UserRequest) => {
  const requestUrl = getUrl(
    `api/users/${userId}/links${folderId ? `?folderId=${folderId}` : ""}`
  );
  const response = await fetch(requestUrl);
  const jsonData = await response.json();
  const linksData = jsonData?.data;
  return [response, linksData];
};
