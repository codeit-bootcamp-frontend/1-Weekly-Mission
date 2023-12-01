import { SampleFolderRawData } from "../type";
import { useAsync } from "@/pages/sharing/util/useAsync";

import Folder from "../../../src/components/Folder";
import { axiosInstance } from "sharing/util";
import { mapFolderData } from "../util-map/mapFolderData";

export const useGetFolder = () => {
  const getFolder = () =>
    axiosInstance.get<{ folder: SampleFolderRawData }>("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = mapFolderData(data?.Folder);

  return { loading, error, data: folderData };
};
