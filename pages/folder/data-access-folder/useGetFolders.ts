
import { axiosInstance } from 'sharing/util';
import { FolderRawData } from '../type';
import { useAsync } from '@/pages/sharing/util/useAsync';
import { mapFoldersData } from '../util-map/mapFoldersData';

export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get<{ data: FolderRawData[] }>("users/1/folders");
  const { loading, error, data } = useAsync(getFolders);

  const folders = mapFoldersData(data?.data);
  const sortedFolders = folders.sort((a, b) => a?.id - b?.id);

  return { loading, error, data: sortedFolders };
};
