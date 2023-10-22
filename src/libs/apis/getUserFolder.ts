import { instance } from "libs/api";

async function getUserFolder() {
  const response = await instance.get<{}, Folder>("/api/sample/folder");

  return response;
}

export default getUserFolder;
