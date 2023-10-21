import './css/reset.css';
import './css/root.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { getAccount, getFolder } from './api/apiUrl';
import { useEffect, useState } from 'react';


function App() {
  const [account, setAccount] = useState({});
  const [personalfolder, setPersonalfolder] = useState({});

  
  const handleLoad = async () => {
    const {name, email, profileImageSource} = await getAccount();
    setAccount({name, email, profileImageSource})

    const {folder:{links, name:title }} = await getFolder();
    setPersonalfolder({links,title})
  };

  
  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div className="App">
      <Header account={account}/>
      <Main account={account} personalfolder={personalfolder}/>
      <Footer/>
    </div>
  );
}

export default App;
