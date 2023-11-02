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

import { Navigate, useSearchParams } from 'react-router-dom';
import getFolderListsByUser from '../apis/folder/getFolderListsByUser';
import getLinksByUsersFolder from '../apis/link/getLinksByUsersFolder';
import useAuth from '../hooks/useAuth';

function Folder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cards, setCards] = useState([]);
  const [folderLists, setFolderLists] = useState([
    {
      id: 0,
      name: '전체',
    },
  ]);
  const { isAuth } = useAuth();

  const folderID = searchParams.get('folderId');

  function handleClick(e) {
    const { name, value } = e.target;
    searchParams.set(name, value);
    setSearchParams(searchParams);
  }

  const loadFolderData = async () => {
    const { data } = await getFolderListsByUser('1');

    setFolderLists((prevFolderList) => {
      return [...prevFolderList, ...data];
    });
  };

  const loadcardData = useCallback(async () => {
    const { data } = await getLinksByUsersFolder('1', folderID);

    setCards(() => {
      return [...data];
    });
  }, [folderID]);

  const getFolderName = (folderID, folderLists) => {
    if (!folderID) {
      return '전체';
    } else {
      const folderName = folderLists.find((folderList) => {
        return folderList.id === Number(folderID);
      });
      return folderName !== undefined ? folderName.name : '';
    }
  };

  const folderName = getFolderName(folderID, folderLists);

  useEffect(() => {
    loadFolderData();
  }, []);

  useEffect(() => {
    loadcardData();
  }, [folderID, loadcardData]);

  if (!isAuth()) {
    return <Navigate to="/signin" />;
  }

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
          {folderID !== '0' && <FolderEdit />}
        </div>
        {cards.length ? (
          <Binder cards={cards} shared="off" />
        ) : (
          <FolderEmptyNoti />
        )}
      </section>
    </>
  );
}
export default Folder;
