import GlobalStyle from '../global/globalStyles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import LinkAddInput from '../components/LinkAddInput';
import FolderMain from '../components/FolderMain'
import useGetAccount from '../hooks/useGetAccount';
import useGetSearchFolder from '../hooks/useGetSearchFolder';
import useGetSelectedFolder from '../hooks/useGetSelectedFolder';
import styled from "styled-components";


const Folder = () => {
  let userID = 1;

  const account = useGetAccount(userID);
  const selectedFolder = useGetSelectedFolder(userID);
  const folderContentsInfo = useGetSearchFolder(userID);

  const TopArea = styled.div`
    display: flex;
    padding: 6rem 32rem 9rem 32rem;
    flex-direction: column;
    align-items: center;
    align-items: space-around;
    gap: 0.8rem;
    background: var(--gray0);
  `
 
  return (
    <>
    <GlobalStyle />
    <Nav account={account}/>
    <TopArea>
      <LinkAddInput />
    </TopArea>
    {folderContentsInfo && <FolderMain userID={userID} folderInfo={folderContentsInfo.data} selectedFolder={selectedFolder.data}/>}
    <Footer />
    </>  
  )

}
 
export default Folder;