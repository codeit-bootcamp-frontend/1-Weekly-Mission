import useGetData from './useGetData';
import { USERS } from '../constants/path';

/**
 * @param {*} id 링크를 조회할 폴더의 id, -1이면 전체 링크 조회
 * @returns user 1의 link 데이터 객체의 배열
 */
function useGetLinks(id) {
  const query = id === -1 ? '' : `?folderId=${id}`;
  const links = useGetData(USERS[1].links, query);
  if (!links) return null;
  return links.data;
}

export default useGetLinks;
