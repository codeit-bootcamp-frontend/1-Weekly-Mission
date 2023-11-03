import styled from 'styled-components';

function ShareFolderModal() {
  return (
    <>
      <Container>
        <Content>
          <Title>폴더 공유</Title>
          <FolderName>폴더명</FolderName>
          <IconLayout>
            <IconWrapper>
              <Icon src="/assets/image/kakao.jpg" />
              <p>카카오톡</p>
            </IconWrapper>
            <IconWrapper>
              <Icon src="/assets/image/facebook.png" />
              <p>페이스북</p>
            </IconWrapper>
            <IconWrapper>
              <Icon src="/assets/image/linkshare.png" />
              <p>링크 복사</p>
            </IconWrapper>
          </IconLayout>
        </Content>
      </Container>
    </>
  );
}

export default ShareFolderModal;

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
  height: 20.9rem;
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

const IconLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Icon = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 37.333px;
`;
