import { useState, useEffect } from 'react';
import { getFolder } from '../api';
import CardList from './CardList';
import search from '../assets/search.svg';
import './FolderPage.css';
import linkImg from '../assets/link-Img.png';



function Main() {
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
    <>
    <div className="addLink">
      <form className="link-form">
          <img className="link-img" src={linkImg} alt={linkImg}/>
          <input className="link-input" placeholder="링크를 추가해 보세요"></input>
        <button className="link-button">추가하기</button>
      </form>
    </div>
      <div className="container">
        <div className="container2">
          <div className="search-container">
            <img className="search-img" src={search} alt="돋보기" />
            <input className="search-input" type="text" placeholder="링크를 검색해 보세요." />
          </div>
          <CardList folderLinks={folderLinks} />
        </div>
      </div>
    </>
  );
}

export default Main;