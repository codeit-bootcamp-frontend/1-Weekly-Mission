import { useEffect, useState } from 'react';
import { getFolders, getUserFolders } from '../../api/api';
import CardList from '../Card/CardList';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import './Share.style.css';
import Folder from '../Folder/Folder';

export default function Share() {
  const [userFolderItems, setUserFolderItem] = useState();
  const [folderItems, setFolderItems] = useState([]);

  async function getUserFolderItem() {
    const userFolders = await getUserFolders();
    setUserFolderItem(userFolders);
  }

  async function getFolderItems() {
    const folderList = await getFolders();
    setFolderItems(folderList);
  }

  useEffect(() => {
    getUserFolderItem();
    getFolderItems();
  }, []);

  return (
    <>
      <SearchBar />
      <Folder />
      <div className='folderButtons'>
        <Button className='folderButton' text='전체' />
        {userFolderItems &&
          userFolderItems.map(item => {
            return (
              <Button className='folderButton' key={item.id} text={item.name} />
            );
          })}
      </div>
      <div className='cardWrapper'>
        <CardList items={folderItems} />
      </div>
    </>
  );
}
