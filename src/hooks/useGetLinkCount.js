import useGetFolders from './useGetFolders';

/**
 * @param {*} userId folder 목록 데이터를 조회할 user의 ID
 * @returns 각 folder의 이름과 folder에 저장된 link 개수를 저장한 배열
 */
function useGetLinkCount(userId) {
  const folderData = useGetFolders(userId);
  const linkCount = [];

  if (!folderData) return;
  folderData.map((folder) => {
    linkCount.push({ name: folder.name, count: folder.link.count });
  });

  return linkCount;
}

export default useGetLinkCount;
