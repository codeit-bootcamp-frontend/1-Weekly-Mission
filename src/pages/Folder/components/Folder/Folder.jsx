import * as S from './Folder.style';

function Folder({ data }) {
  const name = data?.name;
  return <S.FolderButton>{name}</S.FolderButton>;
}

export default Folder;
