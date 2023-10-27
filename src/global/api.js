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
  // for (let i = 0; i < body.length; i++) {
  //   body.data.folder_id = body.data.folderId;
  //   body.data.created_at = body.data.createdAt;
  //   body.data.image_source = body.data.imageSource;
  // }
  return body;
}