import { PATHS } from "@/constants/path";
import { Action, MakeURL, UrlType } from "@/utils/getData.type";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

const makeURL: MakeURL = (path, id) => {
  switch (path) {
    case PATHS.SHARED_USER:
      return BASE_URL + "/sample/user";
    case PATHS.SHARED_FOLDER:
      return BASE_URL + "/sample/folder";
    case PATHS.SHARED_FOLDERNAME:
      return BASE_URL + "/sample/folder";
    case PATHS.FOLDER_USER:
      return BASE_URL + `/users/${id}`;
    case PATHS.FOLDER_CATEGORY:
      return BASE_URL + `/users/${id}/folders`;
    case PATHS.FOLDER_LINKS:
      return BASE_URL + `/users/${id}/links`;
    default:
      return PATHS.DEFAULT;
  }
};

export async function getData(path: UrlType, id?: number): Promise<Action> {
  const response = await fetch(makeURL(path, id));
  const body = await response.json();
  return { path, ...body };
}
