import './css/reset.css';
import './css/root.css';
import './components/components.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Shared from './pages/Shared';
import Folder from './pages/Folder';
import { useFetch} from './hooks/useFetch';
import { AccountContext } from './contexts/AccountContext';
import { Route, Routes } from 'react-router-dom';


function App() {
  const {data: userData, errorMessage} = useFetch("users/1", 1);
  
  if(!userData) return;
  return (
    <AccountContext.Provider value={{account: userData.data[0], errorMessage}}>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/shared' element={<Shared/>}/>
          <Route path='/folder' element={<Folder/>}>
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
