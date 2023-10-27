import React, { useEffect, useState } from 'react';
import '../../styles/global.css';
import './style.css';
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
        <nav>
          <a href="../.." className="nav-logo">
            <img src={logoImg} alt="Linkbrary 로고" />
          </a>

          <div className="user-profile">
            <img src={user.profileImageSource} alt="프로필 이미지" />
            <span>{user.email}</span>
          </div>
        </nav>
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

      <footer>
        <div className="footer-container">
          <span>©codeit - 2023</span>
          <div className="footer-menu">
            <a href="/pages/privacy/privacy.html">Privacy Policy</a>
            <a href="/pages/faq/faq.html">FAQ</a>
          </div>
          <div className="sns-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={snsIconF} alt="Linkbrary의 facebook 바로가기" />
            </a>
            <a
              href="https://twitter.com/?lang=ko"
              target="_blank"
              rel="noreferrer"
            >
              <img src={snsIconT} alt="Linkbrary의 twiter 바로가기" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img src={snsIconY} alt="Linkbrary의 youtube 바로가기" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={snsIconI} alt="Linkbrary의 instagram 바로가기" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
