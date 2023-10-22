import './Shared.style.css';
import { getUsers } from '../../api/getUsers';
import { useEffect, useState } from 'react';
import { getFolders } from '../../api/getFolders';
import CardList from '../../components/Card';

export default function Home() {
  const [userItems, setUserItems] = useState([]);
  const [folderItems, setFolderItems] = useState([]);

  async function getUserItems() {
    setUserItems(await getUsers());
  }

  async function getFolderItems() {
    setFolderItems(await getFolders());
  }

  useEffect(() => {
    getFolderItems();
    getUserItems();
  }, []);

  return (
    <>
      <div className='info'>
        <img
          src={userItems.profileImageSource}
          alt='codeit'
          className='avatar'
        />
        <p className='userName'>@{userItems.name}</p>
        <h2 className='folderName'>{folderItems.name}</h2>
      </div>
      <div className='cardWrapper'>
        <CardList items={folderItems.links} />
      </div>
    </>
  );
}
