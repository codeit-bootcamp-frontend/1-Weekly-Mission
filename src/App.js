import './css/reset.css';
import './css/root.css';
import Header from './components/Header';
import Shared from './components/shared/Shared';
import Footer from './components/Footer';
import Folder from './components/folder/Folder';
import { getAccount} from './api/apiUrl';
import { useEffect, useState } from 'react';
import { AccountContext } from './contexts/AccountContext';
import { Route, Routes } from 'react-router-dom';


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
        <Routes>
          <Route path='/shared' element={<Shared/>}/>
          <Route path='/folder' element={<Folder/>}/>
        </Routes>
        <Footer/>
      </div>
    </AccountContext.Provider>
  );
}

export default App;
