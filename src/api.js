export const getSampleUser = async () => {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/user'
  );
  const data = response.json();
  return data;
};

export const getSampleFolder = async () => {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/folder'
  );
  const data = response.json();
  return data;
};
