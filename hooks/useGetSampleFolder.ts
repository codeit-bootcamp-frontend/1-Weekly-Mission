import useAsync from "@/hooks/useAsync";
import { SampleFolder } from "@/types/type";
import { axiosInstance } from "@/utils/axiosInstance";
import mapFolderData from "@/utils/mapFolderData";
import { useCallback, useEffect } from "react";

const useGetSampleFolder = () => {
  const getFolder = useCallback(() => axiosInstance.get<SampleFolder>("sample/folder"), []);
  const { execute, loading, error, data } = useAsync<SampleFolder>(getFolder);
  useEffect(() => {
    execute();
  }, [execute]);

  const folderData = data ? mapFolderData(data.folder) : null;

  return { loading, error, data: folderData };
};

export default useGetSampleFolder;
