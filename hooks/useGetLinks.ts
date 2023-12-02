import useGetData from './useGetData';
import { LinkListType, LinkType } from '@/constants/dataType';
import { ALL_ID } from '@/constants/default';
import { PATH } from '@/constants/path';

/**
 * @param {*} folderId 링크를 조회할 폴더의 id
 * @returns userId를 가진 user의 link 데이터 객체의 배열
 */
function useGetLinks(userId: number, folderId: number): LinkType[] {
  const query = folderId === ALL_ID ? '' : `?folderId=${folderId}`;
  const links = useGetData<LinkListType>(`${PATH.user}/${userId}/${PATH.link}`, query);

  if (!links) return [];
  return links.data;
}

export default useGetLinks;
