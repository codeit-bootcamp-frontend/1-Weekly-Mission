import { FolderRawData } from "@/src/folder/type";
import { mapFoldersData } from "@/src/folder/util-map/mapFoldersData";
import { axiosInstance } from "@/src/sharing/util";
import { useAsync } from "@/src/sharing/util";

export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get<{ data: FolderRawData[] }>("users/1/folders");
  const { loading, error, data } = useAsync(getFolders);

  const folders = mapFoldersData(data?.data);
  const sortedFolders = folders.sort((a, b) => a?.id - b?.id);

  return { loading, error, data: sortedFolders };
};
