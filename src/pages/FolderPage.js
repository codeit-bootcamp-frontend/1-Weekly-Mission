import { useEffect, useState } from "react";
import MobileFolderButton from "../components/MobileFolderButton/MobileFolderButton";
import SearchBar from "../components/SearchBar/SearchBar";
import LinkAddInput from "../components/LinkAddInput/LinkAddInput";
import CardList from "../components/CardList/CardList";
import FolderModifier from "../components/FolderModifier/FolderModifier";
import FolderNameList from "../components/FolderNameList/FolderNameList";

import { getAllCards, getAllFolders } from "../api/api";
import "./FolderPage.css";

function FolderPage() {
  const [folderId, setFolderId] = useState("");
  const [cardList, setCardList] = useState([]);
  const [folderList, setFolderList] = useState([]);

  const getFolderTags = async () => {
    const folderTags = await getAllFolders();
    setFolderList(folderTags?.data);
  };
  const loadCards = async (id = "") => {
    setFolderId(id);
    const folderResult = await getAllCards(folderId);
    setCardList((prevItem) => {
      return [...folderResult?.data];
    });
    console.log(folderResult);
  };
  useEffect(() => {
    getFolderTags();
  }, []);

  useEffect(() => {
    loadCards();
    getFolderTags();
  }, []);

  return (
    <>
      <MobileFolderButton />

      <LinkAddInput />
      <SearchBar />
      <div className="folder-buttons">
        <FolderNameList folderList={folderList} onChange={loadCards} />
        <button type="button" className="add-folder-button">
          폴더 추가+
        </button>
        {folderId && (
          <div className="folder-modifier-buttons">
            <FolderModifier />
          </div>
        )}
      </div>
      <div className="section">
        <CardList cardList={cardList} />
      </div>
    </>
  );
}

export default FolderPage;
