import { useEffect, useState } from 'react';
import FolderButton from './FolderButton';
import { getUserFolders } from '../../api/api';
import './FolderButton.style.css';
import { getFolders } from '../../api/api';
import CardList from '../Card/CardList';

export default function Folder() {
  const [userFolderItems, setUserFolderItems] = useState([]);

  async function getUserFolderList() {
    const folderList = await getUserFolders();
    setUserFolderItems(folderList);
    console.log(userFolderItems);
  }

  const [folderItems, setFolderItems] = useState([]);

  async function getFolderItems() {
    const folderList = await getFolders();
    setFolderItems(folderList);
    console.log(folderItems);
  }

  useEffect(() => {
    getUserFolderList();
    getFolderItems();
  }, []);

  return (
    <>
      <FolderButton text='전체' />
      {userFolderItems &&
        userFolderItems.map(item => {
          console.log(item);
          return (
            <FolderButton key={item.id} text={item.name} folder_id={item.id} />
          );
        })}
      <CardList />
    </>
  );
}
