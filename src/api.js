const url = 'https://bootcamp-api.codeit.kr';

export const getSampleUser = async () => {
  const response = await fetch(`${url}/api/sample/user`);
  const data = response.json();
  return data;
};

export const getSampleFolder = async () => {
  const response = await fetch(`${url}/api/sample/folder`);
  const data = response.json();
  return data;
};
