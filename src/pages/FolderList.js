import SearchBar from '../components/SearchBar/SearchBar';
import FolderNav from '../components/FolderNav/FolderNav';
import AddLinkInput from '../components/AddLinkInput/AddLinkInput';
import FolderAddMenu from '../components/FolderAddMenu/FolderAddMenu';
import FolderName from '../components/FolderName/FolderName';
import styles from './FolderList.module.css';
import { useEffect, useState } from 'react';
import { getSampleUsersFolderLists } from '../apis/api';
import { useParams } from 'react-router';
import FolderEdit from '../components/FolderEdit/FolderEdit';

function FolderList() {
  const [folderLists, setFolderLists] = useState([]);

  const loadFolderData = async () => {
    const { data } = await getSampleUsersFolderLists();

    setFolderLists((prevFolderLists) => {
      return [...prevFolderLists, ...data];
    });
  };

  const { folderID } = useParams();

  const getFolderName = (folderID, folderLists) => {
    if (!folderID) {
      return '전체';
    } else {
      const getFolder = folderLists.find((folderList) => {
        return folderList.id === Number(folderID);
      });
      return getFolder.name;
    }
  };

  const folder = getFolderName(folderID, folderLists);

  useEffect(() => {
    loadFolderData();
  }, []);

  return (
    <>
      <AddLinkInput />
      <section className={styles.root}>
        <SearchBar />
        <div className={styles.flex}>
          <FolderNav folderLists={folderLists} />
          <FolderAddMenu />
        </div>
        <div className={styles.flex}>
          <FolderName>{folder}</FolderName>
          {folderID && <FolderEdit />}
        </div>
      </section>
    </>
  );
}
export default FolderList;
