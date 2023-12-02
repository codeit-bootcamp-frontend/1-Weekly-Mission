import '@/styles/folderLayout.module.css';
import { useCallback, useEffect, useState } from 'react';
import AddLink from '@/components/AddLink';
import Folder from '@/components/Folder';
import SearchBar from '@/components/SearchBar';
import MobileFolderButton from '@/components/MobileFolderButton';
import { getFolders } from '../api/api';

function FolderPage() {
  const [folderList, setFolderList] = useState([]);

  const handleFolderListLoad = useCallback(async () => {
    const result = await getFolders();
    if (!result) {
      return;
    }
    const receivedFolders = result;
    setFolderList(receivedFolders);
  }, []);

  useEffect(() => {
    handleFolderListLoad();
  }, []);

  return (
    <>
      <div className="container">
        <MobileFolderButton />
        <AddLink />
        <div className="content-container">
          <SearchBar />
          <button className="add-folder-button">폴더 추가</button>
          <Folder folderList={folderList} />
        </div>
      </div>
    </>
  );
}

export default FolderPage;
