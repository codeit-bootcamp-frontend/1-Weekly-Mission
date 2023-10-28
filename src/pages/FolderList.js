import SearchBar from '../components/SearchBar/SearchBar';
import FolderNav from '../components/FolderNav/FolderNav';
import AddLinkInput from '../components/AddLinkInput/AddLinkInput';
import FolderAddMenu from '../components/FolderAddMenu/FolderAddMenu';
import FolderName from '../components/FolderName/FolderName';
import { useEffect, useState } from 'react';
import { getSampleUsersFolderLists } from '../apis/api';

function FolderList() {
  const section = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    width: '100%',
    maxWidth: '112.4rem',
    padding: '0rem 3.2rem',
    margin: '4rem auto',
  };

  const [folderLists, setFolderLists] = useState([]);

  const loadFolderData = async () => {
    const { data } = await getSampleUsersFolderLists();

    setFolderLists((prevfolderLists) => {
      return [...prevfolderLists, ...data];
    });
  };

  useEffect(() => {
    loadFolderData();
  }, []);

  return (
    <>
      <AddLinkInput />
      <section style={section}>
        <SearchBar />
        <div>
          <FolderNav folderLists={folderLists} />
          <FolderAddMenu />
        </div>
        <div>
          <FolderName />
        </div>
      </section>
    </>
  );
}
export default FolderList;
