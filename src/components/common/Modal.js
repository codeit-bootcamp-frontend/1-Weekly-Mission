import styled from 'styled-components';
import closeImg from '../../assets/images/_close.svg';
import Rename from '../modal/Rename';

const modal = {
  '폴더 이름 변경': <Rename />,
};

export default function Modal({ isOpen, onModalClose, currentModal }) {
  console.log(currentModal);
  if (!isOpen) {
    return <></>;
  } else {
  }
  return (
    <ModalBackground>
      <Container>
        <Close src={closeImg} onClick={onModalClose}></Close>
        <Title>{currentModal}</Title>
        {modal[currentModal]}
      </Container>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 40px;
  background-color: var(--linkbrary-white);
  border-radius: 15px;
`;

const Close = styled.img`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700px;
`;
