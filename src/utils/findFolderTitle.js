/**
 * @param {*} folders 폴더 데이터의 배열
 * @param {*} selectedId 찾고자 하는 폴더의 id
 * @returns selectedId와 매치되는 폴더 제목
 */
export function findFolderTitle(folders, selectedId) {
  const selectedFolder = folders.find((folder) => selectedId === folder.id);
  if (selectedFolder) return selectedFolder.name;
  return '전체';
}
