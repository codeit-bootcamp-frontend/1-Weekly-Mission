import { FolderType } from 'constants/dataType';
import useGetData from './useGetData';
import { PATH } from 'constants/path';
/**
 * @returns userId를 가진 user의 folder 데이터 배열
 */
function useGetFolders(userId: number): FolderType[] {
  const folders = useGetData(`${PATH.user}/${userId}/${PATH.folder}`);

  if (folders) {
    folders.type = 'folder_list';
    if (folders.type === 'folder_list') return folders.data;
  }

  return [];
}

export default useGetFolders;
