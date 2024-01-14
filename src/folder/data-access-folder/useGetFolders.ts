import { Folder } from "@/src/folder/type";

import { axiosInstance } from "@/src/sharing/util";
import { useAsync } from "@/src/sharing/util";

export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get<Folder[]>("folders");
  const { loading, error, data } = useAsync({ asyncFunction: getFolders });

  const sortedFolders = data?.sort((a, b) => a?.id - b?.id);

  return { loading, error, data: sortedFolders };
};
