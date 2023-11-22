import { mapFolderData } from "folder/util-map";
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
  const getFolder = () => axiosInstance.get<SampleFolder>("sample/folder");
  const { loading, error, data } = useAsync<SampleFolder>(getFolder);

  const folderData = data ? mapFolderData(data.folder) : null;

  return { loading, error, data: folderData };
};
