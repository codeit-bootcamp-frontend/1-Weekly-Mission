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
import { requestFullFolderApi } from "../../api/getFullFolderApi";
import ModalListButton from "../../components/modal/ModalListButton";

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
  const [isChangeFolderNameClicked, setIsChangeFolderNameClicked] =
    useState(false);
  const [isDeleteFolderClicked, setIsDeleteFolderClicked] = useState(false);
  const [isShareFolderClicked, setIsShareFolderClicked] = useState(false);

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

  function handleChangeFolderNameClick(e) {
    e.preventDefault();
    setIsChangeFolderNameClicked(!isChangeFolderNameClicked);
  }

  function handleDeleteFolderClick(e) {
    e.preventDefault();
    setIsDeleteFolderClicked(!isDeleteFolderClicked);
  }

  function handleShareFolderClick(e) {
    e.preventDefault();
    setIsShareFolderClicked(!isShareFolderClicked);
  }

  function handleCopyClipBoard(text) {
    try {
      navigator.clipboard.writeText(text);
      alert("링크가 클립보드에 복사되었습니다!");
    } catch (error) {
      alert("클립보드 복사에 실패하였습니다.");
    }
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

  const [fullFolderData, setFullFolderData] = useState();
  const getFullFolderData = async () => {
    const temp = await requestFullFolderApi();
    setFullFolderData(temp?.data);
  };
  useEffect(() => {
    getFullFolderData();
  }, []);

  const getSingleFolderData = async () => {
    const temp = await requestSingleFolderApi(singleFolderDataId);
    setSingleFolderData(temp?.data);
  };

  useEffect(() => {
    if (!singleFolderDataId) return;
    getSingleFolderData();
  }, [singleFolderDataId]);

  function handleModalListButton(e) {
    e.preventDefault();
  }

  const currentLink = `localhost:3000/shared?user={1}&folder=${singleFolderDataId}`;

  function handleFaceBookClick(e, url) {
    e.preventDefault();
    window.open(`http://www.facebook.com/sharer.php?u=${url}`);
  }

  function handleKakaoClick(e, url) {
    e.preventDefault();
    alert("Kakao SDK가 로드되지 않았습니다. 나중에 다시 시도해주세요.");
    return;
    const sharedUrl = url;
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "카카오톡 공유",
          description: "카카오톡으로 주소를 공유합니다.",
          imageUrl: "이미지 URL",
          link: {
            mobileWebUrl: sharedUrl,
            webUrl: sharedUrl,
          },
        },
        buttons: [
          {
            title: "웹에서 보기",
            link: {
              mobileWebUrl: sharedUrl,
              webUrl: sharedUrl,
            },
          },
        ],
      });
    } else {
      alert("Kakao SDK가 로드되지 않았습니다. 나중에 다시 시도해주세요.");
    }
  }

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

      {isChangeFolderNameClicked ? (
        <ModalBackground>
          <Modal>
            <p>
              <b>폴더 이름 변경</b>
            </p>
            <div style={{ position: "relative" }}>
              <img
                src="images/modalClose.svg"
                style={{
                  position: "absolute",
                  right: "-16.5rem",
                  top: "-5rem",
                }}
                onClick={handleChangeFolderNameClick}
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
              placeholder="변경할 이름 입력"
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
              변경하기
            </button>
          </Modal>
        </ModalBackground>
      ) : null}

      {isDeleteFolderClicked ? (
        <ModalBackground>
          <Modal>
            <b>폴더 삭제</b>
            <div style={{ position: "relative" }}>
              <img
                src="images/modalClose.svg"
                style={{
                  position: "absolute",
                  right: "-16.5rem",
                  top: "-6rem",
                }}
                onClick={handleDeleteFolderClick}
              />
            </div>

            <div>{singleFolderName}</div>
            <button
              style={{
                background: "var(--linkbrary-red, #FF5B56)",
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
              삭제하기
            </button>
          </Modal>
        </ModalBackground>
      ) : null}

      {isShareFolderClicked ? (
        <ModalBackground>
          <Modal>
            <p style={{ width: "28rem", textAlign: "center" }}>
              <b>폴더 공유</b>
            </p>
            <p>{singleFolderName}</p>
            <div style={{ position: "relative" }}>
              <img
                src="images/modalClose.svg"
                style={{
                  position: "absolute",
                  right: "-16.5rem",
                  top: "-9rem",
                }}
                onClick={handleShareFolderClick}
              />
            </div>
            <div
              style={{
                display: "flex",
                gap: "3.2rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                onClick={(e) => handleKakaoClick(e, currentLink)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src="images/kakao.svg"
                  style={{ width: "4rem", height: "4rem" }}
                />
                카카오톡
              </button>
              <button
                onClick={(e) => handleFaceBookClick(e, currentLink)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src="images/facebook2.svg"
                  style={{ width: "4rem", height: "4rem", background: "blue" }}
                />
                페이스북
              </button>
              <button
                onClick={() => handleCopyClipBoard(currentLink)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src="images/shareLink.svg"
                  style={{ width: "4rem", height: "4rem" }}
                />
                링크 복사
              </button>
            </div>
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
            <button onClick={handleShareFolderClick}>
              <img src="/images/share.svg" />
              공유
            </button>
            <button onClick={handleChangeFolderNameClick}>
              <img src="/images/pen.svg" />
              이름 변경
            </button>
            <button onClick={handleDeleteFolderClick}>
              <img src="/images/discard.svg" />
              삭제
            </button>
          </div>
        </div>
      )}

      {totalData && isTotalClicked && (
        <Cards fullData={totalData} fullFolderData={fullFolderData} />
      )}
      {singleFolderData && isSingleClicked && (
        <Cards fullFolderData={fullFolderData} fullData={singleFolderData} />
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
              {fullFolderData.map((list) => {
                return (
                  <li style={{ listStyle: "none" }} key={list.id}>
                    <ModalListButton onClick={(e) => handleModalListButton(e)}>
                      <b>{list.name}</b> &nbsp; {list.link.count}개 링크
                    </ModalListButton>
                  </li>
                );
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
