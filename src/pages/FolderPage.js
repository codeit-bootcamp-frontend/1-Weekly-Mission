import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import MobileFolderButton from "../components/MobileFolderButton/MobileFolderButton";
import SearchBar from "../components/SearchBar/SearchBar";
import LinkAddInput from "../components/LinkAddInput/LinkAddInput";
import CardList from "../components/CardList/CardList";
import useAsync from "../../src/hooks/useAsync";
import FolderHeader from "../components/FolderHeader/FolderHeader";

import { getAllCards, getAllFolders } from "../api/api";
import "./FolderPage.css";

function FolderPage() {
  const param = useParams();
  const [folderId, setFolderId] = useState("");
  const [cardList, setCardList] = useState([]);
  const [folderList, setFolderList] = useState([]);
  const { current: cardListArray } = useRef(cardList);

  // 내가 가지고 있는 모든 폴더 목록들을 받아서 folderList 배열에 저장.
  const [pending, error, getAllFoldersAsync] = useAsync(getAllFolders);
  const getFolderList = async () => {
    const allFolders = await getAllFoldersAsync();
    setFolderList(allFolders?.data);
  };

  // 폴더 버튼의 id를 인자로 받아 folderId에 id 값 저장,
  // 해당 폴더의 카드 리스트들을 cardList에 저장
  const getCardList = async (id = "") => {
    setFolderId(id);
    const folderResult = await getAllCards(folderId);
    console.log(folderResult);
    setCardList(() => {
      return [...folderResult?.data];
    });
  };

  useEffect(() => {
    getFolderList();
    getCardList();
  }, [cardListArray]);

  return (
    <>
      <MobileFolderButton />

      <LinkAddInput />
      <SearchBar />
      <div className="folder-buttons">
        <FolderHeader folderList={folderList} onChange={getCardList} />
      </div>
      <div className="section">
        <CardList cardList={cardList} />
      </div>
    </>
  );
}

export default FolderPage;
