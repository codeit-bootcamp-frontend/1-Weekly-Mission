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
  const [isTotalClicked, setIsTotalClicked] = useState(false);
  const [isSingleClicked, setIsSingleClicked] = useState(false);
  const [singleFolderDataId, setSingleFolderDataId] = useState();
  const [singleFolderData, setSingleFolderData] = useState([]);
  const [singleFolderName, setSingleFolderName] = useState();

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
    if (isSingleClicked) {
      setIsSingleClicked(false);
    }
    setIsTotalClicked(true);
  }

  const handleFolderClick = (folderId, folderName) => {
    if (isTotalClicked) {
      setIsTotalClicked(false);
    }
    setIsSingleClicked(true);
    setSingleFolderDataId(folderId);
    setSingleFolderName(folderName);
  };

  const getSingleFolderData = async () => {
    const temp = await requestSingleFolderApi(singleFolderDataId);
    setSingleFolderData(temp?.data);
  };

  useEffect(() => {
    if (!singleFolderDataId) return;
    getSingleFolderData();
  }, [singleFolderDataId]);

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
      <button className="folder-add-button">
        폴더 추가
        <img src="/images/add.svg" />
      </button>

      {totalData && isTotalClicked && (
        <div className="header-summary">전체</div>
      )}

      {singleFolderData && isSingleClicked && (
        <div className="header-summary" style={{}}>
          {singleFolderName}
          <div style={{ display: "flex", gap: "2rem" }}>
            <button>
              <img src="/images/share.svg" />
              공유
            </button>
            <button>
              <img src="/images/pen.svg" />
              이름 변경
            </button>
            <button>
              <img src="/images/discard.svg" />
              삭제
            </button>
          </div>
        </div>
      )}

      {totalData && isTotalClicked && <Cards fullData={totalData} />}
      {singleFolderData && isSingleClicked && (
        <Cards fullData={singleFolderData} />
      )}
      {singleFolderData.length === 0 && isSingleClicked && (
        <div
          className="folder-list"
          style={{
            fontSize: "1.6rem",
            display: "flex",
            justifyContent: "center",
            paddingTop: "4rem",
            paddingBottom: "4rem",
          }}
        >
          저장된 링크가 없습니다
        </div>
      )}
    </>
  );
};

export default Header;
