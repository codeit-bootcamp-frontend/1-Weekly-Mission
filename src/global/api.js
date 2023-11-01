export const getAccount = async (userID = "sample") => {
  const idNum = userID;
  if (userID === "sample") userID = "sample/user";
  else userID = `users/${userID}`;
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/` + userID);
  const body = await response.json();
  if (body.data) return body.data[idNum - 1];
  else {
    const { email, profileImageSource: image_source } = body;
    return { email, image_source };
  }
};

export const getShareFolder = async () => {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/sample/folder`);
  const body = await response.json();
  return body.folder;
};

export const getSearchFolder = async (userID = 1, folderID) => {
  const folderQueryString = folderID ? `?folderId=${folderID}` : "";
  const userIDFolder = `${userID}/links${folderQueryString}`;
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/` + userIDFolder);
  const body = await response.json();
  return body;
};

export const getSelectedFolder = async (userID = 1) => {
  const userIDFolder = `${userID}/folders`;
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/` + userIDFolder);
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
  console.log(body);
  return body;
};
