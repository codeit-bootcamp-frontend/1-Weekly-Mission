import { useState, useEffect } from "react";
import { getFolder, getLink, getLinksFolderId } from "../../../api";
import './FolderPage.css';
import CardList from "../../CardList";
import FolderList from "../../FolderList";
import SearchBar from "../../SearchBar";
import linkImg from "../../../assets/link-Img.png";

function FolderPage() {
  const [folderData, setFolderData] = useState([]);
  const [folderLink , setFolderLink] = useState([]);
  const [folderId, setFolderId] = useState(null);

  const getFolderList = async () => {
    const result = await getFolder();
    const { data } = result;
    setFolderData(data);
  }

  const getFolderLink = async () => {
    const result = await getLink();
    const { data } = result;
    setFolderLink(data);
  };

  // folderId에 맞는 폴더 리스트 조회
  const getFolderId = async (folderId) => {
    const result = await getLinksFolderId(folderId);
    const { data } = result;
    setFolderLink(data);
  }

  useEffect(()=>{
    getFolderList();
    getFolderLink();
  }, []);

  const handleClick = (folderId) => { setFolderId(folderId) };

  useEffect(()=>{
    if(!folderId) return;
    getFolderId(folderId);
  },[folderId])


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
          <FolderList data={folderData} onClick={handleClick} id={folderId} />
          <CardList link={folderLink} />
        </div>
      </div>
    </div>
  );
}

export default FolderPage;