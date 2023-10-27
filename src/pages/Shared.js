import GlobalStyle from '../global/globalStyles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SharedMain from '../components/SharedMain'
import useGetAccount from '../hooks/useGetAccount';
import useGetShareFolder from '../hooks/useGetShareFolder';

const Shared = () => {
  const account = useGetAccount();
  const folderInfo = useGetShareFolder();
  return (
    <>
    <GlobalStyle />
    <Nav account={account}/>
    {folderInfo && <Header folderInfo={folderInfo}/>}  
    {folderInfo && <SharedMain folderInfo={folderInfo.links}/>}
    <Footer />
    </>  
  )
}

export default Shared;
