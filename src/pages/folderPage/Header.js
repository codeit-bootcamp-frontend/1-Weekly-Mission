import React, { useEffect, useState } from "react";
import "../../styles/landing.css";
import Search from "../../components/Search/Search";
import AddLink from "../../components/addLink/AddLink";
import { getFolderList, getTotalFolder } from "../../api/folderListApi";
import FolderList from "./FolderList";
import { requestSingleFolderApi } from "../../api/singleFolderApi";

import Cards from "./Cards";
import "./header.css";
import ModalBackground from "../../components/modal/ModalBackground";
import Modal from "../../components/modal/Modal";

const Header = () => {
  const [fullList, setFullList] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const [isTotalClicked, setIsTotalClicked] = useState(false);
  const [isSingleClicked, setIsSingleClicked] = useState(false);
  const [singleFolderDataId, setSingleFolderDataId] = useState();
  const [singleFolderData, setSingleFolderData] = useState([]);
  const [singleFolderName, setSingleFolderName] = useState();
  const [isAddLinkClicked, setIsAddLinkClicked] = useState(false);
  const [addLinkValue, setAddLinkValue] = useState("");
  const [isAddFolderClicked, setIsAddFolderClicked] = useState(false);
  function handleAddLinkClick(e) {
    e.preventDefault();
    if (addLinkValue !== "") {
      setIsAddLinkClicked(!isAddLinkClicked);
    }
  }

  function handleAddFolderClick(e) {
    e.preventDefault();
    setIsAddFolderClicked(!isAddFolderClicked);
  }

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
        <AddLink
          onClick={handleAddLinkClick}
          setAddLinkValue={setAddLinkValue}
        />
      </header>

      <Search />

      <div className="folder-list">
        <button
          className="folder-list-button"
          onClick={handleTotalClick}
          style={{ background: isTotalClicked ? "#6D6AFE" : "#fff" }}
        >
          전체
        </button>

        {fullList && (
          <FolderList
            fullData={fullList}
            handleFolderClick={handleFolderClick}
            isTotalClicked={isTotalClicked}
          />
        )}
      </div>
      <button className="folder-add-button" onClick={handleAddFolderClick}>
        폴더 추가
        <img src="/images/add.svg" />
      </button>
      {isAddFolderClicked ? (
        <ModalBackground>
          <Modal>
            <p>
              <b>폴더 추가</b>
            </p>
            <div style={{ position: "relative" }}>
              <img
                src="images/modalClose.svg"
                style={{
                  position: "absolute",
                  right: "-16.5rem",
                  top: "-5rem",
                }}
                onClick={handleAddFolderClick}
              />
            </div>
            <input
              style={{
                width: "28rem",
                height: "4rem",
                borderRadius: "8px",
                border: "1px solid var(--linkbrary-gray-20, #CCD5E3)",
                padding: "0 2rem",
              }}
              placeholder="내용 입력"
            ></input>
            <button
              style={{
                background:
                  "var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%))",
                borderRadius: "8px",
                width: "28rem",
                height: "2rem",
                padding: "1.6rem 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              추가하기
            </button>
          </Modal>
        </ModalBackground>
      ) : null}

      {totalData && isTotalClicked && (
        <div className="header-summary">전체</div>
      )}

      {singleFolderData && isSingleClicked && (
        <div className="header-summary">
          {singleFolderName}
          <div className="folder-data-util-buttons">
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
      {isAddLinkClicked ? (
        <ModalBackground>
          <Modal>
            <b>폴더에 추가</b>
            <p>링크 주소: {addLinkValue}</p>
            <div style={{ position: "relative" }}>
              <img
                src="images/modalClose.svg"
                style={{
                  position: "absolute",
                  right: "-16.5rem",
                  top: "-10rem",
                }}
                onClick={handleAddLinkClick}
              />
            </div>
            <ul>
              {fullList.map((list) => {
                return <li key={list.id}>{list.name}</li>;
              })}
            </ul>
            <button
              style={{
                background:
                  "var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%))",
                borderRadius: "8px",
                width: "28rem",
                height: "2rem",
                padding: "1.6rem 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              추가하기
            </button>
          </Modal>
        </ModalBackground>
      ) : null}
    </>
  );
};

export default Header;
