import GlobalStyle from '../global/globalStyles';
import Nav from '../components/Folder/Nav';
import Footer from '../components/Folder/Footer';
import LinkAddInput from '../components/UI/LinkAddInput';
import FolderMain from '../components/Folder/Main/FolderMain';
import useGetAccount from '../hooks/useGetAccount';
import useGetSelectedFolder from '../hooks/useGetSelectedFolder';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FolderProvider } from '../context/FolderContext';
import EmptyLinkScreen from '../components/Folder/Main/EmptyLinkScreen';

function Folder() {
  // const { id } = useParams();  (path='/folder/:id')
  const [userId, setUserId] = useState(1);
  const [success, setSuccess] = useState(false);

  const account = useGetAccount(userId);
  const selectedFolder = useGetSelectedFolder(userId);
  useEffect(() => {
    setUserId(userId);
  }, []);

  return (
    <Layout>
      <GlobalStyle />
      <Nav account={account} setSuccess={setSuccess} />
      <Content>
        <TopArea>
          <LinkAddInput selectedFolder={selectedFolder?.data} />
        </TopArea>
        {success ? (
          <FolderProvider>
            {selectedFolder && <FolderMain userID={userId} selectedFolder={selectedFolder?.data} />}
          </FolderProvider>
        ) : (
          <EmptyLinkScreen>로그인이 필요한 페이지입니다🫥</EmptyLinkScreen>
        )}
      </Content>
      <Footer />
    </Layout>
  );
}

export default Folder;

const TopArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: space-around;

  padding: 6rem 32rem 9rem 32rem;
  gap: 0.8rem;
  background: var(--gray0);

  @media (max-width: 1124px) {
    padding: 6rem 20rem 9rem 20rem;
  }
  @media (max-width: 779px) {
    padding: 6rem 3.25rem 9rem 3.25rem;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 최소 화면 높이만큼 컨텐츠 영역 확보 */
`;

const Content = styled.div`
  flex: 1;
`;
