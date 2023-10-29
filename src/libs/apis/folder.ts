import { instance } from "libs/api";

export async function getUserSampleFolder() {
  const response = await instance.get<{}, Folder>("/api/sample/folder");
  return response;
}

export async function getUserFolderList() {
  const response = await instance.get<{}, UserFolder>("/api/users/1/folders");
  return response;
}
