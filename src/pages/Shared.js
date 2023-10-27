import GlobalStyle from '../global/globalStyles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main'
import useGetAccount from '../hooks/useGetAccount';
import useGetFolder from '../hooks/useGetFolder';

const App = () => {
  const account = useGetAccount({email: 'stranger'});
  const folder = useGetFolder();
  console.log()

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

export default App;