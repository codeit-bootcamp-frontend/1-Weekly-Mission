const getUser = async () => {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
  if (!response.ok) {
    throw new Error("유저 데이터를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
};

export default getUser;
