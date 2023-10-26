import * as S from "./FolderInfo.style";

function FolderInfo({ data }) {
  const { folder } = data;
  const folderName = folder?.name;
  const owner = folder?.owner;
  const ownerName = owner?.name;
  const ownerProfileImg = owner?.profileImageSource;

  return (
    <S.FolderInfoContainer>
      <img src={ownerProfileImg} alt="폴더 소유자 프로필 이미지" />
      <p>{ownerName}</p>
      <h1>{folderName}</h1>
    </S.FolderInfoContainer>
  );
}

export default FolderInfo;
