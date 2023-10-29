import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import MobileFolderButton from "../components/MobileFolderButton/MobileFolderButton";
import SearchBar from "../components/SearchBar/SearchBar";
import LinkAddInput from "../components/LinkAddInput/LinkAddInput";
import useAsync from "../../src/hooks/useAsync";
import FolderHeader from "../components/FolderHeader/FolderHeader";

import { getAllCards, getAllFolders } from "../api/api";
import "./FolderPage.css";

function FolderPage() {
  const param = useParams();
  const [folderList, setFolderList] = useState([]);

  // 내가 가지고 있는 모든 폴더 목록들을 받아서 folderList 배열에 저장.
  const [pending, error, getAllFoldersAsync] = useAsync(getAllFolders);
  const getFolderList = async () => {
    const allFolders = await getAllFoldersAsync();
    setFolderList(allFolders?.data);
  };

  useEffect(() => {
    getFolderList();
  }, []);

  return (
    <>
      <MobileFolderButton />
      <LinkAddInput />
      <SearchBar />
      <div className="folder-buttons">
        <FolderHeader folderList={folderList} />
      </div>
    </>
  );
}

export default FolderPage;
