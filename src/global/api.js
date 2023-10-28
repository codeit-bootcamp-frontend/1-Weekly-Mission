export const getAccount = async (userID = 'sample') => {
  const idNum = userID;
  if (userID === 'sample') userID = 'sample/user';
  else userID = `users/${userID}`;
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/`+userID);
  const body = await response.json();
  if (body.data) return body.data[idNum-1];
  else {
    const {email, profileImageSource: image_source} = body;
    return {email, image_source};
  }
}

export const getShareFolder = async () => {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/sample/folder`);
  const body = await response.json();
  console.log(body.folder);
  return body.folder;
}

export const getSearchFolder = async (userID = 1) => {
  const userIDFolder = `${userID}/links`;
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/` + userIDFolder);
  const body = await response.json();
  return body;
}

export const getSelectedFolder = async (userID = 1, folderID) => {
  Number(folderID) ?  folderID = `?folderId=${folderID}` : folderID = '';
  const userIDFolder = `${userID}/folders${folderID}`;
  console.log(userIDFolder);
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/` + userIDFolder);
  const body = await response.json();
  return body;
}