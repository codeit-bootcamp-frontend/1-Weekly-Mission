import * as S from "@/components/folderUserInfo/SharedFolderInfo.style";
import { SharedFolderProps } from "@/types/type";

const SharedFolderInfo = ({ profileImage, ownerName, folderName }: SharedFolderProps) => {
  return (
    <S.FolderInfoWrap>
      <S.FolderOwnerInfo>
        <S.UserAvatarImg src={profileImage} alt={ownerName} />@{ownerName}
      </S.FolderOwnerInfo>
      <S.FolderTitle>{folderName}</S.FolderTitle>
    </S.FolderInfoWrap>
  );
};

export default SharedFolderInfo;
