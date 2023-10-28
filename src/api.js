const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

const getResponse = async (path) => {
  const response = await fetch(`${BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const data = await response.json();
  return data;
};

export { getResponse };
