import { SampleFolderRawData } from "@/src/folder/type";
import { mapSampleFolderData } from "@/src/folder/util-map";
import { useAsync } from "@/src/sharing/util";
import { axiosInstance } from "@/src/sharing/util";

export const useGetSampleFolder = () => {
  const getFolder = () => axiosInstance.get<{ folder: SampleFolderRawData }>("sample/folder");
  const { loading, error, data } = useAsync({ asyncFunction: getFolder });

  const folderData = mapSampleFolderData(data?.folder);

  return { loading, error, data: folderData };
};
