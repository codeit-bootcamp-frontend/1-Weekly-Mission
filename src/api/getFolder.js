const getFolder = async () => {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  if (!response.ok) {
    throw new Error("폴더 데이터를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
};

export default getFolder;
