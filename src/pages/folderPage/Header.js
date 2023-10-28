import React, { useEffect, useState } from "react";
import "../../styles/landing.css";
import Search from "../../components/Search/Search";
import AddLink from "../../components/addLink/AddLink";
import { getFolderList, getTotalFolder } from "../../api/folderListApi";
import FolderList from "./FolderList";
import { requestSingleFolderApi } from "../../api/singleFolderApi";

import Cards from "./Cards";
import "./header.css";

const Header = () => {
  const [fullList, setFullList] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const [isTotalClicked, setIsClicked] = useState(false);
  const [singleFolderDataId, setSingleFolderDataId] = useState();
  const [singleFolderData, setSingleFolderData] = useState([]);

  const getFolderLists = async () => {
    const temp = await getFolderList();
    setFullList(temp?.data);
  };

  const getTotalData = async () => {
    const temp = await getTotalFolder();
    setTotalData(temp?.data);
  };

  useEffect(() => {
    getFolderLists();
    getTotalData();
  }, []);

  function handleTotalClick() {
    setIsClicked(!isTotalClicked);
  }

  const handleFolderClick = (folderId) => {
    setSingleFolderDataId(folderId);
  };

  const getSingleFolderData = async () => {
    const temp = await requestSingleFolderApi(singleFolderDataId);
    setSingleFolderData(temp);
  };

  useEffect(() => {
    if (!singleFolderDataId) return;
    getSingleFolderData();
  }, [singleFolderDataId]);

  //console.log(singleFolderDataId);

  return (
    <>
      <header style={{ padding: "6rem 0 9rem 0" }}>
        <AddLink />
      </header>

      <Search />

      <ul className="folder-list">
        <li style={{ listStyle: "none" }}>
          <button
            className="folder-list-button"
            onClick={handleTotalClick}
            style={{ background: isTotalClicked ? "#6D6AFE" : "#fff" }}
          >
            전체
          </button>
        </li>
        {fullList && (
          <FolderList
            fullData={fullList}
            handleFolderClick={handleFolderClick}
          />
        )}
      </ul>

      {totalData && isTotalClicked && (
        <div className="header-summary">
          전체
          <button className="folder-add-button">
            폴더 추가
            <img src="/images/add.svg" />
          </button>
        </div>
      )}

      {totalData && isTotalClicked && <Cards fullData={totalData} />}
    </>
  );
};

export default Header;
