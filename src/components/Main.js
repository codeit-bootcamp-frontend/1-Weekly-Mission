import styles from '../styles/Main.module.css';
import Cards from './Cards.js';
import Search from './Search.js';
import Profile from './Profile.js';
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
      <Profile name={name} owner={owner} />
      <Search />
      {/* <Cards /> */}
    </div>
  );
}

export default Main;
