import './css/reset.css';
import './css/root.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { getAccount} from './api/apiUrl';
import { useEffect, useState } from 'react';
import { AccountContext } from './contexts/AccountContext';


function App() {
  const [account, setAccount] = useState({});
  const [userErrorMessage, setUserErrorMessage] = useState("");
  
  const handleLoad = async () => {
    try{
      const {name, email, profileImageSource} = await getAccount();
      setAccount({name, email, profileImageSource});
    }
    catch(error){
      setUserErrorMessage(error);
    }
  };

  
  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <AccountContext.Provider value={{account, userErrorMessage}}>
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </AccountContext.Provider>
  );
}

export default App;
