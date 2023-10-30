import SearchBar from '../components/SearchBar/SearchBar';
import FolderNav from '../components/FolderNav/FolderNav';
import AddLinkInput from '../components/AddLinkInput/AddLinkInput';
import FolderAddMenu from '../components/FolderAddMenu/FolderAddMenu';
import FolderName from '../components/FolderName/FolderName';
import styles from './FolderList.module.css';
import { useCallback, useEffect, useState } from 'react';
import {
  getSampleUsersFolderLists,
  getUsersFolderLinkItems,
} from '../apis/api';
import FolderEdit from '../components/FolderEdit/FolderEdit';
import SharedFolder from '../components/SharedFolder/SharedFolder';
import FolderEmptyNoti from '../components/FolderEmptyNoti/FolderEmptyNoti';
import { useSearchParams } from 'react-router-dom';

function FolderList() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(e) {
    e.preventDefault();
    const { name, value } = e.target;
    searchParams.set(name, value);
    setSearchParams(searchParams);
  }

  const folderID = searchParams.get('folderid');

  const [folderLists, setFolderLists] = useState([]);

  const loadFolderData = async () => {
    const { data } = await getSampleUsersFolderLists();

    setFolderLists(() => {
      return [...data];
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

  const folder = getFolderName(folderID, folderLists);

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
          <FolderNav onClick={handleClick} folderLists={folderLists} />
          <FolderAddMenu />
        </div>
        <div className={styles.flex}>
          <FolderName>{folder}</FolderName>
          {folderID && <FolderEdit />}
        </div>
        {cards.length ? (
          <SharedFolder cards={cards} shared="off" />
        ) : (
          <FolderEmptyNoti />
        )}
      </section>
    </>
  );
}
export default FolderList;
