import './css/reset.css';
import './css/root.css';
import Header from './components/Header';
import Shared from './components/shared/Shared';
import Footer from './components/Footer';
import Folder from './components/folder/Folder';
import { useFetch} from './api/useFetch';
import { useEffect, useState } from 'react';
import { AccountContext } from './contexts/AccountContext';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [isHeaderStyle, setIsHeaderStyle] = useState(false);
  const {data: userData, errorMessage} = useFetch("users/1");
  if(!userData) return;

  
  return (
    <AccountContext.Provider value={{account: userData.data[0], errorMessage}}>
      <div className="App">
        <Header isHeaderStyle={isHeaderStyle}/>
        <Routes>
          <Route path='/shared' element={<Shared/>}/>
          <Route path='/folder' element={<Folder setIsHeaderStyle={setIsHeaderStyle}/>}>
            <Route index element={<Folder/>}/>
            <Route path=':folderId' element={<Folder/>}/>
          </Route>
        </Routes>
        <Footer/>
      </div>
    </AccountContext.Provider>
  );
}

export default App;
