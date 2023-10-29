import styled from "styled-components";
import FolderManageButton from "../atoms/FolderManageButton";
import shareIcon from "../../images/share.png";
import nameChangeIcon from "../../images/pen.png";
import deleteIcon from "../../images/delete.png";
import FolderButtonContainer from "../atoms/FolderButtonContainer";
import DeviceSizes from "../../utils/DeviceSizes";

const Container = styled(FolderButtonContainer)`
  & h1 {
    font-size: 2.4rem;
    font-weight: 600;
  }
  ${DeviceSizes.mobile} {
    display: flex;
    grid-area: folderManageButtons;
  }
`;

const StyledFolderMenus = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const FolderManageButtons = ({ folderName }) => {
  return (
    <Container>
      <h1>{folderName || "전체"}</h1>
      {folderName && (
        <StyledFolderMenus>
          <FolderManageButton>
            <img src={shareIcon} alt="공유하기" />
            공유
          </FolderManageButton>
          <FolderManageButton>
            <img src={nameChangeIcon} alt="이름 변경하기" />
            이름 변경
          </FolderManageButton>
          <FolderManageButton>
            <img src={deleteIcon} alt="삭제하기" />
            삭제
          </FolderManageButton>
        </StyledFolderMenus>
      )}
    </Container>
  );
};

export default FolderManageButtons;
