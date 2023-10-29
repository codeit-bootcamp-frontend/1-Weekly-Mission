import styled from "styled-components";
import colors from "../../../style/colors";
import { flexCenter } from "../../../style/common";

const Button = styled.button`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${colors.primary};
  background: #fff;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
`;

const AddFolder = styled.div`
  color: #6d6afe;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const FolderButtons = styled.div`
  display: flex;
  gap: 8px;
  ${flexCenter};
`;
function FolderButton({ folders }) {
  return (
    <ButtonContainer>
      <FolderButtons>
        {folders.map((folder) => (
          <Button key={folder.id}>{folder.name}</Button>
        ))}
      </FolderButtons>
      <AddFolder>폴더 추가 +</AddFolder>
    </ButtonContainer>
  );
}

export default FolderButton;
