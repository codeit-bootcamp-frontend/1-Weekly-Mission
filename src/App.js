import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import getFolderData from './services/api';
import { useEffect, useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({});

  const getData = useCallback(async () => {
    const userData = await getFolderData('sample/use');
    setUser(userData);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className='App'>
      <Nav user={user} />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
