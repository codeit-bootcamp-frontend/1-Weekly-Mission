import * as Styled from "./StyledModal";

const ModalEdit = ({ modalClose }) => {
  return (
    <Styled.ModalBackground>
      <Styled.Modal>
        <Styled.ModalLabel>폴더 이름 변경</Styled.ModalLabel>
        <Styled.ModalInput placeholder="유용한 팁" />
        <Styled.ModalBtn>변경하기</Styled.ModalBtn>
        <Styled.ModalCloseBtn onClick={modalClose} />
      </Styled.Modal>
    </Styled.ModalBackground>
  );
};

export default ModalEdit;
