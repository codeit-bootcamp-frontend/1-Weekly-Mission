import { useState, useEffect } from 'react';
import { getFolder } from '../api';
import CardList from './CardList';
import './FolderPage.css';
import linkImg from '../assets/link-Img.png';
import SearchBar from "./SearchBar";



function FolderPage() {
  const [folderLinks, setFolderLinks] = useState([]);

  const handleLoad = async () => {
    const folderData = await getFolder();
    const {
      folder: { links },
    } = folderData;
    setFolderLinks(links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="folder-container">
      <div className="add-link">
        <form className="add-link-form">
            <img className="add-link-img" src={linkImg} alt={linkImg}/>
            <input className="add-link-input" placeholder="링크를 추가해 보세요"></input>
          <button className="add-link-button">추가하기</button>
        </form>
      </div>
      <div className="container">
        <div className="container2">
          <SearchBar />
          <div className="menuBar">
            <ul className="toggleMenu">
              <li className="menuList">전체</li>
              <li className="menuList">즐겨찾기</li>
              <li className="menuList">코딩 팁</li>
              <li className="menuList">채용 사이트</li>
              <li className="menuList">유용한 글</li>
              <li className="menuList">나만의 장소</li>
            </ul>
            <div className="add-folder">폴더 추가 +</div>
          </div>
          <CardList folderLinks={folderLinks} />
        </div>
      </div>
    </div>
  );
}

export default FolderPage;