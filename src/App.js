import './App.css';
import CardList from './components/CardList';
import Nav from './components/Nav';
import User from './components/User';
import Search from './components/Search';
import Footer from './components/Footer';
import getFolderData from './services/api';
import { useEffect, useState, useCallback } from 'react';

function App() {
  const [cards, setcards] = useState([]);
  const [folderInfo, setFolderInfo] = useState(null);
  const [user, setUser] = useState({});
  const getdata = useCallback(async () => {
    const { folder } = await getFolderData('sample/folder');
    const userData = await getFolderData('sample/user');
    setUser(userData);
    setFolderInfo(folder);
    setcards(folder.links);
  }, []);

  useEffect(() => {
    getdata();
  }, [getdata]);

  return (
    <div className='App'>
      <Nav user={user} />
      <User folderInfo={folderInfo} />
      <Search />
      <CardList cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
