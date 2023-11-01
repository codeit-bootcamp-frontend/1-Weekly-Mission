const URL = "https://bootcamp-api.codeit.kr/api/";

export const getAccount = async (userID) => {
  const idNum = userID;
  if (!userID) return;
  if (userID === "S") userID = "sample/user";
  else userID = `users/${userID}`;
  const response = await fetch(URL + userID);
  const body = await response.json();
  if (body.data) return body.data[idNum - 1];
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
  const folderQueryString = folderID ? `?folderId=${folderID}` : "";
  const userIDFolder = `users/${userID}/links${folderQueryString}`;
  const response = await fetch(URL + userIDFolder);
  const body = await response.json();
  return body;
};

export const getSelectedFolder = async (userID = 1) => {
  const userIDFolder = `users/${userID}/folders`;
  const response = await fetch(URL + userIDFolder);
  const body = await response.json();
  const allFolder = {
    id: 0,
    created_at: 0,
    name: "전체",
    user_id: userID,
  };
  const updateData = (currentData) => {
    return [allFolder, ...currentData];
  };
  body.data = updateData(body.data);
  return body;
};
