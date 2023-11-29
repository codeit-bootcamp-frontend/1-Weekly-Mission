import { Action, MakeURL, URLS, UrlType } from "src/utils/getData.type";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

const makeURL: MakeURL = (path, id) => {
  switch (path) {
    case URLS.SHARED_USER:
      return BASE_URL + "/sample/user";
    case URLS.SHARED_FOLDER:
      return BASE_URL + "/sample/folder";
    case URLS.SHARED_FOLDERNAME:
      return BASE_URL + "/sample/folder";
    case URLS.FOLDER_USER:
      return BASE_URL + `/users/${id}`;
    case URLS.FOLDER_CATEGORY:
      return BASE_URL + `/users/${id}/folders`;
    case URLS.FOLDER_LINKS:
      return BASE_URL + `/users/${id}/links`;
    default:
      return URLS.DEFAULT;
  }
};

export async function getData(path: UrlType, id?: number): Promise<Action> {
  const response = await fetch(makeURL(path, id));
  const body = await response.json();
  return { path, ...body };
}
