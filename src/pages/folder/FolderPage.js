import React, { useEffect, useState } from 'react';
import CardList from '../../components/card/CardList';
import FolderList from '../../components/folder/FolderList';
import './FolderPage.css';
import CardSearchBar from '../../components/card/CardSearchBar';
import { getFolderList, getLinkList } from '../../api/api';
import {
  canIcon,
  linkIcon,
  penIcon,
  shareIcon,
} from '../../constants/globalImages';

function FolderPage() {
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleSetSelectedFolder = (folderInfo) => {
    setSelectedFolder(folderInfo);
  };

  const handleLinkListLoad = async () => {
    const { data } = await getLinkList(selectedFolder?.id);
    setLinks([...data]);
  };

  const handleFolderListLoad = async () => {
    const { data } = await getFolderList();
    setFolders([...data]);
  };

  useEffect(() => {
    handleFolderListLoad();
  }, []);

  useEffect(() => {
    handleLinkListLoad();
  }, [selectedFolder]);

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
        <FolderList
          folders={folders}
          handleSetSelectedFolder={handleSetSelectedFolder}
          selectedFolderId={selectedFolder?.id}
        />
        <div className="links-header">
          <span className="folder-info-name">{selectedFolder?.name}</span>
          {selectedFolder && (
            <div className="controll-bar">
              <div className="controll-bar-item">
                <img src={shareIcon} alt="" />
                <span>공유</span>
              </div>
              <div className="controll-bar-item">
                <img src={penIcon} alt="" />
                <span>이름 변경</span>
              </div>
              <div className="controll-bar-item">
                <img src={canIcon} alt="" />
                <span>삭제</span>
              </div>
            </div>
          )}
        </div>

        <CardList links={links} />
      </main>
    </>
  );
}

export default FolderPage;
