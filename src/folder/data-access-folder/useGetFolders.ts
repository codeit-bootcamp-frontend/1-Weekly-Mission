import { axiosInstance } from "sharing/util";
import { useAsync } from "sharing/util";

type Folder = {
  id: string;
  name: string;
};

export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get<Folder[]>("users/1/folders");
  const { loading, error, data } = useAsync(getFolders);

  const folders: Folder[] = data?.data ?? [];
  const sortedFolders = folders.sort((a: Folder, b: Folder) => {
    const idA = parseInt(a.id);
    const idB = parseInt(b.id);
    return (idA || 0) - (idB || 0);
  });

  return { loading, error, data: sortedFolders };
};
