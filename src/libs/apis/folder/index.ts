import { AxiosResponse } from "axios";
import { instance } from "src/libs/api";

export async function getUserSampleFolder() {
  const response = await instance.get<{}, Folder>("/api/sample/folder");
  return response;
}

export async function getUserFolderList() {
  const response = await instance.get<{}, AxiosResponse<UserFolder[]>>(
    "/api/users/1/folders"
  );
  return response.data;
}
