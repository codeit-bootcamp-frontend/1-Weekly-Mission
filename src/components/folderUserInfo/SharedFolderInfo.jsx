import * as S from "./SharedFolderInfo.style.js";

const SharedFolderInfo = ({ profileImageSource, userName, folderName }) => {
  return (
    <S.FolderInfoWrap>
      <S.FolderOwnerInfo>
        <S.UserAvatarImg src={profileImageSource} alt={userName} />@{userName}
      </S.FolderOwnerInfo>
      <S.FolderTitle>{folderName}</S.FolderTitle>
    </S.FolderInfoWrap>
  );
};

export default SharedFolderInfo;
