import SearchBar from '../components/SearchBar/SearchBar';
import FolderNav from '../components/FolderNav/FolderNav';
import AddLinkInput from '../components/AddLinkInput/AddLinkInput';
import FolderAddMenu from '../components/FolderAddMenu/FolderAddMenu';
import FolderName from '../components/FolderName/FolderName';
import Binder from '../components/Binder/Binder';
import FolderEdit from '../components/FolderEdit/FolderEdit';
import FolderEmptyNoti from '../components/FolderEmptyNoti/FolderEmptyNoti';

import styles from './Folder.module.css';
import { useCallback, useEffect, useState } from 'react';
import {
  getSampleUsersFolderLists,
  getUsersFolderLinkItems,
} from '../apis/api';
import { useSearchParams } from 'react-router-dom';

function Folder() {
  const [searchParams, setSearchParams] = useSearchParams();

  const folderID = searchParams.get('folderId');

  function handleClick(e) {
    const { name, value } = e.target;
    searchParams.set(name, value);
    setSearchParams(searchParams);
  }

  const [folderLists, setFolderLists] = useState([
    {
      id: 0,
      name: '전체',
    },
  ]);

  const loadFolderData = async () => {
    const { data } = await getSampleUsersFolderLists();

    setFolderLists((prevFolderList) => {
      return [...prevFolderList, ...data];
    });
  };

  const [cards, setCards] = useState([]);

  const loadcardData = useCallback(async () => {
    const { data } = await getUsersFolderLinkItems(folderID);

    setCards(() => {
      return [...data];
    });
  }, [folderID]);

  const getFolderName = (folderID, folderLists) => {
    try {
      if (!folderID) {
        return '전체';
      } else {
        const getFolder = folderLists.find((folderList) => {
          return folderList.id === Number(folderID);
        });
        return getFolder.name;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const folderName = getFolderName(folderID, folderLists);

  useEffect(() => {
    loadFolderData();
  }, []);

  useEffect(() => {
    loadcardData();
  }, [folderID, loadcardData]);

  return (
    <>
      <AddLinkInput />
      <section className={styles.root}>
        <SearchBar />
        <div className={styles.flex}>
          <FolderNav
            onClick={handleClick}
            folderID={folderID}
            folderLists={folderLists}
          />
          <FolderAddMenu />
        </div>
        <div className={styles.flex}>
          <FolderName>{folderName}</FolderName>
          {folderID && <FolderEdit />}
        </div>
        {cards.length ? <Binder cards={cards} /> : <FolderEmptyNoti />}
      </section>
    </>
  );
}
export default Folder;
