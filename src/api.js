const getProfile = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );

  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const data = await response.json();
  return data;
};

const getFolder = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );

  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const data = await response.json();
  return data;
};

export { getProfile, getFolder };
