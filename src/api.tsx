const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

const HOST = "http://localhost:3000";

type PathType = keyof typeof PATH;

const PATH = {
  SHARED_USER: BASE_URL + "sample/user",
  SHARED_FOLDER: BASE_URL + "sample/folder",
  FOLDER_USER: BASE_URL + "users/1",
  FOLDER_FOLDERS: BASE_URL + "users/1/folders",
  FOLDER_LINKS: BASE_URL + "users/1/links",
};

const getResponse = async (path: PathType, query = "") => {
  const response = await fetch(PATH[path] + query);

  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const data = await response.json();
  return data;
};

export { HOST, PathType, getResponse };
