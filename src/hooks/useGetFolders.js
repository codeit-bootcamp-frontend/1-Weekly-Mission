import useGetData from './useGetData';
import { USERS } from '../constants/path';
/**
 * @returns user 1의 folder 데이터 배열
 */
function useGetFolders() {
  const folders = useGetData(USERS[1].folders);
  if (!folders) return null;
  return folders.data;
}

export default useGetFolders;
