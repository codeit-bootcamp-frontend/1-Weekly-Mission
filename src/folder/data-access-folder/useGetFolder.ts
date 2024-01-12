import { axiosInstance, useAsync } from "@/src/sharing/util";
import { FolderRawData } from "../type";
import { DEFAULT_FOLDER } from "./constant";

export const useGetFolder = (folderId: string) => {
  const getFolder = () => axiosInstance.get<{ data: FolderRawData[] }>(`folders/${folderId}`);
  const { loading, error, data } = useAsync({ asyncFunction: getFolder, enabled: !!folderId });
  const folderDataResponse = data?.data?.[0];

  const folderData = folderDataResponse
    ? {
        id: folderDataResponse.id,
        name: folderDataResponse.name,
        userId: folderDataResponse.user_id,
        createdAt: folderDataResponse.created_at,
      }
    : DEFAULT_FOLDER;

  return { loading, error, data: folderData };
};
