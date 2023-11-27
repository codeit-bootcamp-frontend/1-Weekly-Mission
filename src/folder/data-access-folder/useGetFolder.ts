import { mapFolderData } from "folder/util-map";
import { useCallback, useEffect } from "react";
import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";

export interface SampleLink {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface SampleFolder {
  folder: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
    links: SampleLink[];
    count: number;
  };
}

export const useGetFolder = () => {
  const getFolder = useCallback(() => axiosInstance.get<SampleFolder>("sample/folder"), []);
  const { execute, loading, error, data } = useAsync<SampleFolder>(getFolder);
  useEffect(() => {
    execute();
  }, [execute]);

  const folderData = data ? mapFolderData(data.folder) : null;

  return { loading, error, data: folderData };
};
