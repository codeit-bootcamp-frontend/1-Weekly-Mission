import styles from '../styles/Main.module.css';
import Cards from './Cards.js';
import Search from './Search.js';
import FolderInfo from './FolderInfo.js';
import { getUserData } from '../api/getUserData';
import { getFolders } from '../api/getFolders.js';
import { useState, useEffect } from 'react';

function Main() {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState({});

  const loadFolderData = async () => {
    const {
      folder: { name, owner },
    } = await getFolders();

    setName(name);
    setOwner({ ...owner });
  };

  useEffect(() => {
    loadFolderData();
  }, []);

  return (
    <div className={styles.root}>
      <FolderInfo name={name} owner={owner} />
      <Search />
      {/* <Cards /> */}
    </div>
  );
}

export default Main;
