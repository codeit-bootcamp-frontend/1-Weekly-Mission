import styled from 'styled-components';
import closeBtn from 'assets/images/close.svg';
import useNotScroll from 'hooks/useNotScroll';

function ModalFrame({ children, onClickClose }) {
  useNotScroll();

  return (
    <div>
      <Mask />
      <Body>
        <CloseIcon src={closeBtn} alt="모달 닫기 버튼" onClick={onClickClose} />
        <Container>{children}</Container>
      </Body>
    </div>
  );
}

export default ModalFrame;

const Mask = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
`;
const Body = styled.div`
  width: 360px;
  z-index: 999;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 15px;
  border: 1px solid var(--stroke-light);
  background: white;
`;
const CloseIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  &:hover {
    cursor: pointer;
  }
`;
const Container = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
