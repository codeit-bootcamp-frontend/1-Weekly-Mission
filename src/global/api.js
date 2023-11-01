const URL = 'https://bootcamp-api.codeit.kr/api/';

export const getAccount = async (userId) => {
  const index = userId - 1;
  if (!userId) return;
  if (userId === 'S') userId = 'sample/user';
  else userId = `users/${userId}`;
  const response = await fetch(URL + userId);
  const body = await response.json();
  console.log(body.data); // 정상 작동
  if (body.data) return body.data[index];
  else {
    const { email, profileImageSource: image_source } = body;
    return { email, image_source };
  }
};

export const getShareFolder = async () => {
  const response = await fetch(URL + `sample/folder`);
  const body = await response.json();
  return body.folder;
};

export const getSearchFolder = async (userID = 1, folderID) => {
  const folderQueryString = folderID ? `?folderId=${folderID}` : '';
  const userIDFolder = `users/${userID}/links${folderQueryString}`;
  const response = await fetch(URL + userIDFolder);
  const body = await response.json();
  return body;
};

export const getSelectedFolder = async (userID) => {
  if (!userID) return;
  const userIDFolder = `users/${userID}/folders`;
  const response = await fetch(URL + userIDFolder);
  const body = await response.json();
  const allFolder = {
    id: 0,
    created_at: 0,
    name: '전체',
    user_id: userID,
  };
  const updateData = (currentData) => {
    return [allFolder, ...currentData];
  };
  body.data = updateData(body.data);
  return body;
};
