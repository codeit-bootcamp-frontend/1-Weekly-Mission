import CardList from '../components/CardList';
import User from '../components/User';
import Search from '../components/Search';
import getFolderData from '../services/api';
import { useEffect, useState, useCallback } from 'react';

export default function Shared() {
  const [cards, setcards] = useState([]);
  const [folderInfo, setFolderInfo] = useState(null);

  const getData = useCallback(async () => {
    const { folder } = await getFolderData('sample/folder');
    setFolderInfo(folder);
    setcards(folder.links);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className='App'>
      <User folderInfo={folderInfo} />
      <Search />
      <CardList cards={cards} />
    </div>
  );
}
