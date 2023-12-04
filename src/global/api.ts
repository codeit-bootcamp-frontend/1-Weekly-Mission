import { SelectedFolderInfo } from "../types";

const URL = "https://bootcamp-api.codeit.kr/api/";

type userID = number;

export const getAccount = async (userId: userID) => {
  const index = userId - 1;
  if (!userId) return;
  let path = userId === -1 ? "sample/user" : `users/${userId}`;
  const response = await fetch(URL + path);
  const body = await response.json();
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

export const getSearchFolder = async (userID: userID = 1, folderID: number) => {
  const folderQueryString = folderID ? `?folderId=${folderID}` : "";
  const userIDFolder = `users/${userID}/links${folderQueryString}`;
  const response = await fetch(URL + userIDFolder);
  const body = await response.json();
  return body;
};

export const getSelectedFolder = async (userID: userID) => {
  if (!userID) return;
  const userIDFolder = `users/${userID}/folders`;
  const response = await fetch(URL + userIDFolder);
  const body = await response.json();
  const allFolder = {
    id: 0,
    created_at: "",
    name: "전체",
    user_id: userID,
    link: {
      count: 0,
    },
  };

  const updateData = (currentData: SelectedFolderInfo[]) => {
    return [allFolder, ...currentData];
  };
  body.data = updateData(body.data);
  return body;
};
