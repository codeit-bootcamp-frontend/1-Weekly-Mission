import useAsync from "@/hooks/useAsync";
import { Folders } from "@/types/type";
import { axiosInstance } from "@/utils/axiosInstance";
import { useCallback, useEffect } from "react";

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
