import { axiosInstance } from "sharing/util";
import { useAsync } from "sharing/util";

export interface Folder {
  id: number;
  createdAt: string;
  name: string;
  url: string;
  user_id: number;
  link: {
    count: number;
  };
}

export interface Folders {
  data: Folder[];
}

export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get<Folders>("users/1/folders");
  const { loading, error, data } = useAsync<Folders>(getFolders);

  const folders = data?.data;

  const sortedFolders = folders ? [...folders].sort((a, b) => a.id - b.id) : [];

  return { loading, error, data: sortedFolders };
};
