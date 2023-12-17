import { apiConfig } from "./apiConfig";

export type FolderInfo = {
  id: number;
  created_at: Date;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
};

type FolderInfoResult = {
  data: FolderInfo[];
};

const getCurrentUsersFolderData = async (userID: number) => {
  const BASE_URL = apiConfig.baseUrl;
  const endpoints = apiConfig.endpoints.folder.specificUserFolderData(userID);

  const response = await fetch(`${BASE_URL}${endpoints}`);
  const result: FolderInfoResult = await response.json();

  return result;
};

export default getCurrentUsersFolderData;
