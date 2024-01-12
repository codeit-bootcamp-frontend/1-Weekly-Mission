import { FolderRawData } from "@/src/folder/type";
import { mapFoldersData } from "@/src/folder/util-map";
import { axiosInstance } from "@/src/sharing/util";
import { useAsync } from "@/src/sharing/util";

export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get<{ data: { folder: FolderRawData[] } }>("folders");
  const { loading, error, data } = useAsync({ asyncFunction: getFolders });

  const folders = mapFoldersData(data?.data?.folder);
  const sortedFolders = folders.sort((a, b) => a?.id - b?.id);

  return { loading, error, data: sortedFolders };
};
