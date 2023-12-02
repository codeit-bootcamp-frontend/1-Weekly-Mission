import { apiConfig } from "./apiConfig";

export type Linkinfo = {
  id: number;
  created_at: string;
  updated_at: boolean | string;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
};

type FolderInfoResult = {
  data: Linkinfo[];
};

const getLinksByFolderID = async (userID: number, folderID: string | string[] | undefined) => {
  const BASE_URL: string = apiConfig.baseUrl;
  const endpoints: string = apiConfig.endpoints.link.getLinksByFolderID(userID, folderID);

  const response = await fetch(`${BASE_URL}${endpoints}`);
  const result: FolderInfoResult = await response.json();

  return result;
};

export default getLinksByFolderID;
