import useGetData from './useGetData';
import { PATH } from '@/constants/path';
import { FolderType } from '@/constants/dataType';
import { FolderListType } from '@/constants/dataType';
/**
 * @returns userId를 가진 user의 folder 데이터 배열
 */
function useGetFolders(userId: number): FolderType[] {
  const folders = useGetData<FolderListType>(`${PATH.user}/${userId}/${PATH.folder}`);

  if (!folders) return [];
  return folders.data;
}

export default useGetFolders;
