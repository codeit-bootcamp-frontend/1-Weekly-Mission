const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

const HOST = "http://localhost:3000";

const PATH = {
  shared: {
    user: BASE_URL + "sample/user",
    folder: BASE_URL + "sample/folder",
  },
  folder: {
    user: BASE_URL + "users/1",
    folders: BASE_URL + "users/1/folders",
    links: BASE_URL + "users/1/links",
  },
};

const getResponse = async (pageType, dataType, query = "") => {
  const response = await fetch(PATH[pageType][dataType] + query);

  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const data = await response.json();
  return data;
};

export { HOST, PATH, getResponse };
