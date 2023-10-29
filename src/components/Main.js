import styles from '../styles/Main.module.css';
import Cards from './Cards.js';
import Search from './Search.js';
import FolderInfo from './FolderInfo.js';
import { getFolders } from '../api/getFolders.js';
import { useState, useEffect } from 'react';

function Main() {
  const [folderData, setFolderData] = useState([]);

  const handleLoadFolderData = async () => {
    try {
      setFolderData(await getFolders());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoadFolderData();
  }, []);

  return (
    <div className={styles.root}>
      <FolderInfo folderData={folderData} />
      <Search />
      <Cards folderData={folderData} />
    </div>
  );
}

export default Main;
