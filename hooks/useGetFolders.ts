import useGetData from './useGetData';
import { PATH } from '@/lib/constants/path';
import { FolderData } from '@/lib/types/dataType';
import { FolderList } from '@/lib/types/dataType';
/**
 * @returns userId를 가진 user의 folder 데이터 배열
 */
function useGetFolders(userId: number): FolderData[] {
  const folders = useGetData<FolderList>(`${PATH.user}/${userId}/${PATH.folder}`);

  if (!folders) return [];
  return folders.data;
}

export default useGetFolders;
