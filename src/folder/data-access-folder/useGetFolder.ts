import { mapFolderData } from "folder/util-map";
import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";

export interface SampleFolder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: {
    id: number;
    createdAt: Date;
    url: string;
    title: string;
    description: string;
    imageSource: string;
  }[];
}

export const useGetFolder = () => {
  const getFolder = () => axiosInstance.get<SampleFolder>("sample/folder");
  const { loading, error, data } = useAsync<SampleFolder>(getFolder);

  const folderData = data ? mapFolderData(data) : null;

  return { loading, error, data: folderData };
};
