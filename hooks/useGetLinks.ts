import { LinkType } from 'constants/dataType';
import useGetData from './useGetData';
import { ALL_ID } from 'constants/default';
import { PATH } from 'constants/path';

/**
 * @param {*} folderId 링크를 조회할 폴더의 id
 * @returns userId를 가진 user의 link 데이터 객체의 배열
 */
function useGetLinks(userId: number, folderId: number): LinkType[] {
  const query = folderId === ALL_ID ? '' : `?folderId=${folderId}`;
  const links = useGetData(`${PATH.user}/${userId}/${PATH.link}`, query);

  if (links) {
    links.type = 'link_list';
    if (links.type === 'link_list') return links.data;
  }

  return [];
}

export default useGetLinks;
