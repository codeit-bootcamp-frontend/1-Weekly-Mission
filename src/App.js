import './App.css';
import { CardList } from './components/CardList';
import Nav from './components/Nav';
import User from './components/User';
import getFolderData from './services/api';
import { useEffect, useState, useCallback } from 'react';

function App() {
  const [cards, setcards] = useState([]);
  const [folderInfo, setFolderInfo] = useState({});
  const [owner, setOwner] = useState({});
  const getdata = useCallback(async () => {
    const { folder } = await getFolderData();
    console.log('app components', folder, owner);
    const ownerInfo = { ...folder.owner };
    setFolderInfo(folder);
    setOwner(ownerInfo);
    setcards(folder.links);
  }, []);

  useEffect(() => {
    getdata();
  }, [getdata]);

  return (
    <div className='App'>
      <Nav />
      <User folderInfo={folderInfo} owner={owner} />
      <CardList cards={cards} />
    </div>
  );
}

export default App;
