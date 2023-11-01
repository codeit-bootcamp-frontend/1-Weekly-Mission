import styled from "styled-components";
import ModalButton from "components/button/ModalButton";
import closeIcon from "assets/close.svg";

const Container = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const Modal = styled.div`
  position: relative;
  width: 22.5rem;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  background: var(--color-white);
  border-radius: 1rem;
  border: 1px solid var(--color-gray-20);
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.125rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-gray-20);
  outline-style: none;

  &:focus {
    border: 1px solid var(--color-primary);
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  cursor: pointer;
`;

export default function AddFolder({ onClose }) {
  const handleOutSideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Container onClick={handleOutSideClick}>
      <Modal>
        <Title>폴더 추가</Title>
        <Contents>
          <Input placeholder="내용 입력" />
          <ModalButton action="change" label="추가하기" />
        </Contents>
        <Icon src={closeIcon} alt="close" onClick={onClose} />
      </Modal>
    </Container>
  );
}
