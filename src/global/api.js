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

export const getFolder = async () =>{
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/sample/folder`);
  const body = await response.json();
  return body;
}