import { apiConfig } from "./apiConfig";

export type FolderInfo = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
};

export type FolderInfoResult = {
  data: FolderInfo[];
};

const getFolderByFolderID = async (folderID: string | string[] | undefined) => {
  const BASE_URL = apiConfig.baseUrl;
  const endpoints = apiConfig.endpoints.folder.getFolderByFolderID(folderID);

  const response = await fetch(`${BASE_URL}${endpoints}`);
  const result: FolderInfoResult = await response.json();

  return result;
};

export default getFolderByFolderID;
