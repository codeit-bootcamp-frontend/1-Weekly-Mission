import styled from 'styled-components';
import Cta from '../Cta';

function InsertFolderModal({ setIsInsertFolderModal }) {
  return (
    <>
      <Container>
        <Content>
          <Title>폴더에 추가</Title>
          <CloseButton
            onClick={() => {
              setIsInsertFolderModal(false);
            }}
          >
            <img src="/assets/image/close.png" alt="닫기 버튼" />
          </CloseButton>
          <Cta name="추가하기" />
        </Content>
      </Container>
    </>
  );
}

export default InsertFolderModal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Title = styled.p`
  color: var(--gray-100, #373740);
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;
