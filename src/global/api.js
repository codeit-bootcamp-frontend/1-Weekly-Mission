export const getAccount = async () => {
  
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/sample/user`);
  const body = await response.json();
  return body;
}

export const getFolder = async () =>{
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/sample/folder`);
  const body = await response.json();
  return body;
}