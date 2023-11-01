import useGetData from './useGetData';
import { PATH } from '../constants/path';
/**
 * @returns userId를 가진 user의 folder 데이터 배열
 */
function useGetFolders(userId) {
  const folders = useGetData(`${PATH.user}/${userId}/${PATH.folder}`);
  if (!folders) return null;
  return folders.data;
}

export default useGetFolders;
