import { styled } from 'styled-components';
import ModalBackground from './ModalBackground';
import ModalButton, { CloseButton } from './ModalButton';
import ModalInput from './ModalInput';
import ModalSubTitle from './ModalSubTitle';
import ModalTitle from './ModalTitle';

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  bottom: 0px;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
  gap: 15px;
`;

function Modal({ title, buttonContent, onClick }) {
  return (
    <ModalWrapper>
      <ModalBackground>
        <CloseButton onClick={onClick} />
        <ContentWrapper>
          <ModalTitle title={title} />
          <ModalSubTitle />
          {title === '' || title === '폴더 삭제' ? <></> : <ModalInput />}
          {title === '폴더 공유' ? <></> : <ModalButton content={buttonContent} />}
        </ContentWrapper>
      </ModalBackground>
    </ModalWrapper>
  );
}

export default Modal;
