import GlobalStyle from '../global/globalStyles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main'
import useGetAccount from '../hooks/useGetAccount';
import useGetFolder from '../hooks/useGetFolder';

const Shared = () => {
  const account = useGetAccount();
  const folder = useGetFolder();

  return (
    <>
    <GlobalStyle />
    <Nav account={account}/>
    {folder && <Header folderInfo={folder}/>}  
    {folder && <Main folder={folder}/>}
    <Footer />
    </>  
  )

}

export default Shared;
