import React, { useEffect, useState } from 'react';
import '../../styles/global.css';
import './HomePageStyle.css';
import {
  logoImg,
  snsIconF,
  snsIconT,
  snsIconY,
  snsIconI,
  searchIcon,
} from '../../constants/globalImages';
import { getFolder, getUser } from '../../api/api';
import Card from '../../components/card/Card';

function HomePage() {
  const [links, setLinks] = useState([]);
  const [folderInfo, setFolderInfo] = useState({});
  const [user, setUser] = useState({});
  const handleFolderLoad = async () => {
    const { folder } = await getFolder();
    setLinks([...folder.links]);
    setFolderInfo(folder);
  };

  const handleUserLoad = async () => {
    const userData = await getUser();
    setUser({ ...userData });
  };

  useEffect(() => {
    handleFolderLoad();
    handleUserLoad();
  }, []);

  return (
    <>
      <header>
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
      <main>
        <div className="search-bar">
          <img src={searchIcon} alt="검색아이콘" />
          <input
            className="search-input"
            type="text"
            placeholder="링크를 검색해 보세요."
          />
        </div>
        <div className="card-container">
          {links.map((link) => (
            <Card key={link.id} data={link} />
          ))}
        </div>
      </main>
    </>
  );
}

export default HomePage;
