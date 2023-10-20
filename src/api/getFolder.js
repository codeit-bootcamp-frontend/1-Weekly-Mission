const getFolder = async () => {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const data = await response.json();
  return data;
};

export default getFolder;
