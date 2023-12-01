import { SampleFolderRawData } from "folder/type";
import { mapFolderData } from "folder/util-map";
import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";

export const useGetFolder = () => {
  const getFolder = () => axiosInstance.get<{ folder: SampleFolderRawData }>("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
