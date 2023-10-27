import { useState, useEffect } from 'react';
import { getFolder } from '../api';
// import './Folder';
import CardList from './CardList';
import search from '../assets/search.svg';


function Main() {
  const [folderName, setFolderName] = useState("");
  const [folderOwner, setFolderOwner] = useState({});
  const [folderLinks, setFolderLinks] = useState([]);

  const handleLoad = async () => {
    const folderData = await getFolder();
    const {
      folder: { name, owner, links },
    } = folderData;
    setFolderName(name);
    setFolderOwner(owner);
    setFolderLinks(links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const { name, profileImageSource } = folderOwner;

  return (
    <>
      <form>
        <input placeholder="링크를 추가해 보세요"></input>
        <button>추가하기</button>
      </form>
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