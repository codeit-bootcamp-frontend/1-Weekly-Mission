import styled from "styled-components";

const FolderInfoContainer = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
`;

const FolderName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

function SelectedFolder({ folderName }) {
  return (
    <FolderInfoContainer>
      <FolderName>{folderName}</FolderName>
    </FolderInfoContainer>
  );
}

export default SelectedFolder;
