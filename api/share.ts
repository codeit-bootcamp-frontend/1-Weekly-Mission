const baseUrl = new URL("https://bootcamp-api.codeit.kr");
const getUrl = (path: string) => new URL(path, baseUrl);

export const getShareUserData = async () => {
  const requestUrl = getUrl("/api/sample/user");
  const response = await fetch(requestUrl);
  const jsonData = await response.json();
  return [response, jsonData];
};

export const getShareData = async () => {
  const requestUrl = getUrl("/api/sample/folder");
  const response = await fetch(requestUrl);
  const jsonData = await response.json();
  return [response, jsonData];
};
