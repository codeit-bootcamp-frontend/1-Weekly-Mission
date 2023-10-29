import React, { useEffect, useState } from 'react';
import CardList from '../../components/card/CardList';
import FolderList from '../../components/folder/FolderList';
import './FolderPage.css';
import CardSearchBar from '../../components/card/CardSearchBar';
import { getFolder } from '../../api/api';
import { linkIcon } from '../../constants/globalImages';

function FolderPage() {
  const [links, setLinks] = useState([]);

  const handleLinkLoad = async () => {
    const { folder } = await getFolder();
    setLinks([...folder.links]);
  };

  useEffect(() => {
    handleLinkLoad();
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
        <FolderList />

        <CardList links={links} />
      </main>
    </>
  );
}

export default FolderPage;
