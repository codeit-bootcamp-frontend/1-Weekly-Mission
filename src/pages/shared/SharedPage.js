import React, { useEffect, useState } from 'react';
import '../../styles/global.css';
import './SharedPage.css';
import { getFolder, getUser } from '../../api/api';
import CardList from '../../components/card/CardList';

function SharedPage() {
  const [links, setLinks] = useState([]);
  const [folderInfo, setFolderInfo] = useState({});

  const handleFolderLoad = async () => {
    const { folder } = await getFolder();
    setLinks([...folder.links]);
    setFolderInfo(folder);
  };

  useEffect(() => {
    handleFolderLoad();
  }, []);

  return (
    <>
      <header className="sharedHeader">
        <div className="folder-info">
          <div className="folder-owner">
            <div className="owner-profile">
              <img
                src={folderInfo?.owner?.profileImageSource}
                alt="프로필 이미지"
              />
            </div>
            <div className="owner-name">@{folderInfo?.owner?.name}</div>
          </div>
          <div className="folder-name">{folderInfo.name}</div>
        </div>
      </header>
      <main className="sharedMain">
        <CardList links={links} />
      </main>
    </>
  );
}

export default SharedPage;
