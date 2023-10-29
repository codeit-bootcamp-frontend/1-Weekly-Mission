import { instance } from "libs/api";
import { useEffect, useState } from "react";

interface Props {
  folderId: number | undefined;
}

function useGetFolderById({ folderId }: Props) {
  const [folderById, setFolderById] = useState<LinkData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getFolderById(id: number | undefined) {
      setIsLoading(true);
      const response = await instance.get<{}, Link>(
        `/api/users/1/links?folderId=${folderId}`
      );

      setFolderById(response.data);
      setIsLoading(false);
    }

    if (typeof folderId === "number") getFolderById(folderId);
  }, [folderId, setFolderById]);

  return {
    folderById,
    isLoading,
  };
}

export default useGetFolderById;
