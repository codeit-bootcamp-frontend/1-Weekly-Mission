import { instance } from "libs/api";

export async function getUserFolder() {
  const response = await instance.get<{}, Folder>("/api/sample/folder");
  return response;
}

export async function getUserProfile() {
  const response = await instance.get<{}, User>("/api/sample/user");
  return response;
}
