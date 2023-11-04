import styled from "styled-components";
import shareIcon from "../assets/share.png";
import modifyIcon from "../assets/pen.png";
import deleteIcon from "../assets/deleteIcon.png";
import { cursorPointer, flexCenter } from "../style/common";
import colors from "../style/colors";

const FolderInfoContainer = styled.div`
  display: flex;
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

const Icons = styled.div`
  display: flex;
  gap: 12px;

`;

const StyledIcon = styled.div`
  ${flexCenter};
  gap: 5px;
  color: ${colors.gray60};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  ${cursorPointer}
`;
function Icon({ img, feature }) {
  return (
    <StyledIcon>
      <img src={img}></img>
      <div>{feature}</div>
    </StyledIcon>
  );
}

function SelectedFolder({ folderName }) {
  return (
    <FolderInfoContainer>
      <FolderName>{folderName}</FolderName>
      {folderName !== "전체" && (
        <Icons>
          <Icon img={shareIcon} feature={"공유"} />
          <Icon img={modifyIcon} feature={"이름 변경"}  />
          <Icon img={deleteIcon} feature={"삭제"} />
        </Icons>
      )}
    </FolderInfoContainer>
  );
}

export default SelectedFolder;
