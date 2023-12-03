import styles from '@/styles/folderLayout.module.css';
import { useCallback, useEffect, useState } from 'react';
import AddLink from '@/components/AddLink';
import Folder from '@/components/Folder';
import SearchBar from '@/components/SearchBar';
import MobileFolderButton from '@/components/MobileFolderButton';
import { getFolders } from '../api/api';
import { FolderRawData } from '../api/type';

function FolderPage() {
  const [folderList, setFolderList] = useState<FolderRawData[]>([]);

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
      <div className={styles.container}>
        <MobileFolderButton />
        <AddLink />
        <div className={styles.content_container}>
          <SearchBar />
          <button className={styles.add_folder_button}>폴더 추가</button>
          {/* <FolderList folderList={folderList} /> */}
        </div>
      </div>
    </>
  );
}

export default FolderPage;
