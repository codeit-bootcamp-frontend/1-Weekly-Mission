import GlobalStyle from '../global/globalStyles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import LinkAddInput from '../components/LinkAddInput';
import FolderMain from '../components/FolderMain'
import useGetAccount from '../hooks/useGetAccount';
import useGetSelectedFolder from '../hooks/useGetSelectedFolder';
import styled from "styled-components";
import { useState, useEffect } from 'react';
import { FolderProvider  }  from '../context/FolderContext';

const Folder = () => {
  const [userId, setUserId] = useState(1);

  const account = useGetAccount(userId);
  const selectedFolder = useGetSelectedFolder(userId);
  

  const TopArea = styled.div`
    display: flex;
    padding: 6rem 32rem 9rem 32rem;
    flex-direction: column;
    align-items: center;
    align-items: space-around;
    gap: 0.8rem;
    background: var(--gray0);
  `

  useEffect(() => {
    setUserId(userId);
  }, [userId]);

  return (
    <>
    <GlobalStyle />
    <Nav account={account}/>
    <TopArea>
      <LinkAddInput />
    </TopArea>
    <FolderProvider>
      {selectedFolder && <FolderMain userID={userId} selectedFolder={selectedFolder.data}/>}
    </FolderProvider>
    <Footer />
    </>  
  )
}
 
export default Folder;