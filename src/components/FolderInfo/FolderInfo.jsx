import * as Styled from "./StyledFolderInfo";

const FolderInfo = ({ data }) => {
  const { folderName, ownerName, ownerImage } = data;
  return (
    <>
      <Styled.OwnerWrapper>
        <Styled.OwnerImg src={ownerImage} alt="폴더 소유자 사진" />
        <Styled.OwnerName>{`@${ownerName}`}</Styled.OwnerName>
      </Styled.OwnerWrapper>
      <Styled.FolderName>{folderName}</Styled.FolderName>
    </>
  );
};

export default FolderInfo;
