import useRequest from "hooks/useRequest";
import * as S from "./FolderInfo.style";

function FolderInfo() {
  const { data } = useRequest({ url: "/sample/folder" });
  const folder = data?.folder;
  const folderName = folder?.name;
  const owner = folder?.owner;
  const ownerName = owner?.name;
  const ownerProfileImg = owner?.profileImageSource;

  return (
    <S.Container>
      <S.Img src={ownerProfileImg} alt="폴더 소유자 프로필 이미지" />
      <S.P>{ownerName}</S.P>
      <S.H1>{folderName}</S.H1>
    </S.Container>
  );
}

export default FolderInfo;
