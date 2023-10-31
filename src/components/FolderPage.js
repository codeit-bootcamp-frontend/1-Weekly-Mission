import { useState, useEffect } from 'react';
import { getFolder } from '../api';
import CardList from './CardList';
import './FolderPage.css';
import linkImg from '../assets/link-Img.png';
import SearchBar from "./SearchBar";
import FolderList from "./FolderList";


function FolderPage() {
  const [folderList, setFolderList] = useState([]);

  const getFolderList = async () => {
    const result = await getFolder();
    const data = result?.data;
    setFolderList(data);
  }

  useEffect(()=>{
    getFolderList();
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
          <FolderList data={folderList} />
          {/* <CardList folderLinks={folderLinks} /> */}
        </div>
      </div>
    </div>
  );
}

export default FolderPage;