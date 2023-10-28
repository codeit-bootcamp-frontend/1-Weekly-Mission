import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import LinkAddInput from "../components/LinkAddInput/LinkAddInput";
import CardList from "../components/CardList/CardList";
import useAsync from "../hooks/useAsync";
import FolderButtonList from "../components/FolderButtonList/FolderButtonList";

import { getAllCards, getAllFolders } from "../api/api";
import "./FolderPage.css";

function FolderPage() {
  const { folderId: folderPath } = useParams();
  const [folderId, setFolderId] = useState("");
  const [cardList, setCardList] = useState([]);
  const [folderList, setFolderList] = useState([]);

  const loadUser = async () => {
    if (!folderPath) {
      setFolderId("");
    } else {
      setFolderId(folderPath);
    }
    const folderResult = await getAllCards(folderPath);
    setCardList((prevItem) => {
      return [...folderResult?.data];
    });
    const folders = await getAllFolders();
    setFolderList(folders?.data);
  };

  const loadCards = async (id) => {
    setFolderId(id);
    const folderResult = await getAllCards(folderId);
    setCardList((prevItem) => {
      return [...folderResult?.data];
    });
    const folders = await getAllFolders();
    setFolderList(folders?.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <section className="folder-section">
        <div className="add-section">
          <LinkAddInput />
        </div>
        <div className="search-section">
          <SearchBar />
        </div>
        <div className="folder-buttons">
          <FolderButtonList folderList={folderList} onChange={loadCards} />
        </div>
        <div className="card-section">
          <CardList cardList={cardList} />
        </div>
      </section>
    </>
  );
}

export default FolderPage;
