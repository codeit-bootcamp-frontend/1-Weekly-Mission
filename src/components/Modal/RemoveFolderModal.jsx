import styled from 'styled-components';
import Cta from '../Cta';

function RemoveFolderModal() {
  return (
    <>
      <Container>
        <Content>
          <Title>폴더 삭제</Title>
          <FolderName>폴더명</FolderName>
          <Cta name="삭제하기" />
        </Content>
      </Container>
    </>
  );
}

export default RemoveFolderModal;

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
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36rem;
  height: 20rem;
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

const FolderName = styled.p`
  color: var(--gray-60, #9fa6b2);
  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem; /* 157.143% */
  margin: 0.8rem 0 2.4rem;
`;
