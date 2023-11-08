import styled from "styled-components";
import * as Styled from "./StyledModal";

const StyledDeleteFolderName = styled(Styled.ModalLabel)`
  font-size: 1.2rem;
  color: var(--gray20);
  margin-top: -10px;
`;

const StyledDeleteBtn = styled(Styled.ModalBtn)`
  background: var(--red);
  margin-top: 0;
`;

const ModalDelete = ({ modalClose }) => {
  return (
    <Styled.ModalBackground>
      <Styled.Modal>
        <Styled.ModalLabel>폴더 삭제</Styled.ModalLabel>
        <StyledDeleteFolderName>폴더명</StyledDeleteFolderName>
        <StyledDeleteBtn>삭제하기</StyledDeleteBtn>
        <Styled.ModalCloseBtn onClick={modalClose} />
      </Styled.Modal>
    </Styled.ModalBackground>
  );
};

export default ModalDelete;
