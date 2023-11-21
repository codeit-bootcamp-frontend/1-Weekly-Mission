import { axiosInstance } from "sharing/util";
import { useAsync } from "sharing/util";

export interface Folder {
  id: number;
  createdAt: Date;
  name: string;
  url: string;
  user_id: 1;
  link: {
    count: number;
  };
}

export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get<Folder[]>("users/1/folders");
  const { loading, error, data } = useAsync<Folder[]>(getFolders);

  const folders = data ? data : null;

  const sortedFolders = folders ? [...folders].sort((a, b) => a.id - b.id) : null;

  return { loading, error, data: sortedFolders };
};
