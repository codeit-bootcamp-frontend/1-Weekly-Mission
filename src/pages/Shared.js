import GlobalStyle from '../global/globalStyles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main'
import { getFolder, getAccount } from '../global/api';
import { useState, useEffect } from 'react';

const App = () => {
  
  const [account, setAccount] = useState({email: 'stranger'});
  const [folder, setFolder] = useState();

  const handleLoad = async () => {
    const {folder:{name:folderTitle, owner, links}} = await getFolder();
    setFolder({folderTitle, owner, links});

    const {email, profileImageSource} = await getAccount();
    setAccount({email, profileImageSource});

  };

  useEffect(() => {
    handleLoad();
  }, []);

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