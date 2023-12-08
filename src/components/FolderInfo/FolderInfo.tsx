import { Folder } from '@pages/shared';
import * as S from './FolderInfo.style';

interface Props {
  folder: Folder;
}

function FolderInfo({ folder }: Props) {
  const { name: folderName } = folder;
  const { name: ownerName, profileImageSource: ownerProfileImg } = folder.owner;

  return (
    <S.Container>
      <S.Img src={ownerProfileImg} alt='폴더 소유자 프로필 이미지' />
      <S.P>{ownerName}</S.P>
      <S.H1>{folderName}</S.H1>
    </S.Container>
  );
}

export default FolderInfo;
