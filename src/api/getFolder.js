const getFolder = async () => {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const body = await response.json();
  return body;
};

export default getFolder;
