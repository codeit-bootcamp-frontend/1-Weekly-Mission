import { useCallback, useEffect } from "react";
import { axiosInstance } from "sharing/util";
import { useAsync } from "sharing/util";

export interface Folder {
  id: number;
  created_at: string;
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
  const getFolders = useCallback(() => axiosInstance.get<Folders>("users/1/folders"), []);
  const { execute, loading, error, data } = useAsync<Folders>(getFolders);

  const folders = data?.data;

  const sortedFolders = folders ? [...folders].sort((a, b) => a.id - b.id) : [];

  useEffect(() => {
    execute();
  }, [execute]);

  return { loading, error, data: sortedFolders };
};
