import React, { useEffect, useState } from 'react';
import CardList from '../../components/card/CardList';
import FolderList from '../../components/folder/FolderList';
import './FolderPage.css';
import CardSearchBar from '../../components/card/CardSearchBar';
import { getFolder, getFolderList } from '../../api/api';
import { linkIcon } from '../../constants/globalImages';

function FolderPage() {
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);

  const handleLinkListLoad = async () => {
    const { folder } = await getFolder();
    setLinks([...folder.links]);
  };
  const handleFolderListLoad = async () => {
    const { data } = await getFolderList();
    setFolders([...data]);
  };

  useEffect(() => {
    handleFolderListLoad();
    handleLinkListLoad();
  }, []);

  return (
    <>
      <header className="header-folder">
        <div className="add-link-container">
          <img src={linkIcon} alt="링크 아이콘" />
          <input
            className="link-input"
            placeholder="링크를 추가해 보세요"
            type="text"
          />
          <button className="btn btn-link" type="button">
            추가하기
          </button>
        </div>
      </header>
      <main className="main-folder">
        <CardSearchBar />
        <FolderList folders={folders} />
        <CardList links={links} />
      </main>
    </>
  );
}

export default FolderPage;
