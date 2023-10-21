import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main'
import { getFolder, getAccount } from './api';
import { useState, useEffect } from 'react';

const App = () => {
  
  const [account, setAccount] = useState();
  const [folder, setFolder] = useState();

  const handleLoad = async () => {
    const {folder:{name:folderTitle, owner, links}} = await getFolder();
    setFolder({folderTitle, owner, links});

    const {email, profileImageSource} = await getAccount();
    setAccount({email, profileImageSource});

  };

  useEffect(() => {
    handleLoad();
  }, [account]);

  return (
    <>
      {account && <Nav account={account}/>}  {/*고치기..*/}
      {folder && <Header folder={folder}/>}  
      {folder && <Main folder={folder}/>}
      <Footer />
    </>
  )
}

export default App;