import styled from 'styled-components';

function Modal() {
  return (
    <>
      <Container>
        <Content>
          <ModalTitle>폴더 이름 변경</ModalTitle>
        </Content>
      </Container>
    </>
  );
}

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36rem;
  height: 23.9rem;
  padding: 3.2rem 4rem;
  border-radius: 15px;
  border: 1px solid var(--gray-20, #ccd5e3);
  background: var(--white, #fff);
`;

const ModalTitle = styled.p`
  color: var(--gray-100, #373740);
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
