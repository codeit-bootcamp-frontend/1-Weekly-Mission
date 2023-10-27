import GlobalStyle from '../global/globalStyles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import LinkAddInput from '../components/LinkAddInput';
import Main from '../components/Main'
import useGetAccount from '../hooks/useGetAccount';
import useGetSearchFolder from '../hooks/useGetSearchFolder';
import styled from "styled-components";


const Folder = () => {
  const account = useGetAccount(1);
  const folderInfo = useGetSearchFolder(1);

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
    {folderInfo && <Main folderInfo={folderInfo.data}/>}
    <Footer />
    </>  
  )

}
 
export default Folder;