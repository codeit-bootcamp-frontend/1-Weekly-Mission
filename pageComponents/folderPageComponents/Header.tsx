import React, { useEffect, useState } from "react";
import Search from "@/components/Search";
import FolderList from "./FolderList";
import Cards from "./Cards";
import axios from "@/libs/axios";
import Image from "next/image";
import s from "./Header.module.css";
import { getSingleFolder } from "@/libs/getSingleFolder";

interface GetData {
  getData: (data: Folders) => void;
}

const Header = ({ getData }: GetData) => {
  const [fullList, setFullList] = useState<Folders>();
  const [totalData, setTotalData] = useState<TotalData>();
  const [isTotalClicked, setIsTotalClicked] = useState(false);
  const [isSingleClicked, setIsSingleClicked] = useState(false);
  const [singleFolderDataId, setSingleFolderDataId] = useState<unknown>();
  const [singleFolderData, setSingleFolderData] = useState<SingleFolderData[]>(
    []
  );
  const [singleFolderName, setSingleFolderName] = useState("");
  const [isAddFolderClicked, setIsAddFolderClicked] = useState(false);
  const [isChangeFolderNameClicked, setIsChangeFolderNameClicked] =
    useState(false);
  const [isDeleteFolderClicked, setIsDeleteFolderClicked] = useState(false);
  const [isShareFolderClicked, setIsShareFolderClicked] = useState(false);

  function handleAddFolderClick(
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLImageElement>
  ) {
    e.preventDefault();
    setIsAddFolderClicked(!isAddFolderClicked);
  }

  function handleChangeFolderNameClick(
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLImageElement>
  ) {
    e.preventDefault();
    setIsChangeFolderNameClicked(!isChangeFolderNameClicked);
  }

  function handleDeleteFolderClick(
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLImageElement>
  ) {
    e.preventDefault();
    setIsDeleteFolderClicked(!isDeleteFolderClicked);
  }

  function handleShareFolderClick(
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLImageElement>
  ) {
    e.preventDefault();
    setIsShareFolderClicked(!isShareFolderClicked);
  }

  function handleCopyClipBoard(text: string) {
    try {
      navigator.clipboard.writeText(text);
      alert("링크가 클립보드에 복사되었습니다!");
    } catch (error) {
      alert("클립보드 복사에 실패하였습니다.");
    }
  }

  const getFolderLists = async () => {
    const temp = await axios.get(`/users/1/folders`);
    setFullList(temp?.data);
  };

  const getTotalData = async () => {
    const temp = await axios.get(`/users/1/links`);
    setTotalData(temp?.data);
  };

  useEffect(() => {
    getFolderLists();
  }, []);
  useEffect(() => {
    getTotalData();
  }, []);

  function handleTotalClick() {
    if (isSingleClicked) {
      setIsSingleClicked(false);
    }
    setIsTotalClicked(true);
  }

  const handleFolderClick = (folderId: unknown, folderName: string) => {
    if (isTotalClicked) {
      setIsTotalClicked(false);
    }
    setIsSingleClicked(true);
    setSingleFolderDataId(folderId as SingleFolderDataId | undefined);
    setSingleFolderName(folderName);
  };

  const [fullFolderData, setFullFolderData] = useState<Folders>({} as Folders);
  const getFullFolderData = async () => {
    const temp = await axios.get(`/users/1/folders`);
    setFullFolderData(temp?.data);
  };
  useEffect(() => {
    getFullFolderData();
  }, []);
  useEffect(() => {
    getData(fullFolderData as Folders);
  }, [fullFolderData]);

  const getSingleFolderData = async () => {
    const temp = await getSingleFolder(singleFolderDataId as number);
    setSingleFolderData(temp?.data?.data);
  };

  useEffect(() => {
    if (!singleFolderDataId) return;
    getSingleFolderData();
  }, [singleFolderDataId]);

  const currentLink = `localhost:3000/shared?user={1}&folder=${singleFolderDataId}`;

  function handleFaceBookClick(
    e: React.MouseEvent<HTMLButtonElement>,
    url: string
  ) {
    e.preventDefault();
    window.open(`http://www.facebook.com/sharer.php?u=${url}`);
  }

  function handleKakaoClick(
    e: React.MouseEvent<HTMLButtonElement>,
    url: string
  ) {
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
  const [inputValue, setInputValue] = useState("");
  function getInputValue(v: string) {
    setInputValue(v);
  }
  let searchedData: SingleFolderData[] = [];

  if (isTotalClicked && totalData) {
    searchedData = totalData?.data?.filter((data) => {
      if (
        data?.url?.includes(inputValue) ||
        data?.title?.includes(inputValue) ||
        data?.description?.includes(inputValue)
      ) {
        return data;
      }
    });
  } else if (isSingleClicked) {
    searchedData = singleFolderData?.filter((data) => {
      if (
        data?.url?.includes(inputValue) ||
        data?.title?.includes(inputValue) ||
        data?.description?.includes(inputValue)
      ) {
        return data;
      }
    });
  } else if (!isTotalClicked && !isSingleClicked) {
    searchedData = [];
  }

  return (
    <>
      <Search getInputValue={getInputValue} />

      <div className="folder-list">
        <button
          onClick={handleTotalClick}
          className={`${s.totalButton} ${
            isTotalClicked ? s.totalButtonClicked : ""
          }`}
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
        <Image
          src="/images/add.svg"
          alt="폴더 추가 + 이미지"
          width={15}
          height={15}
        />
      </button>
      {isAddFolderClicked ? (
        <div className="modal-background">
          <div className="modal">
            <p>
              <b>폴더 추가</b>
            </p>
            <div className={s.closeContainer}>
              <Image
                src="images/modalClose.svg"
                alt="닫기 이미지"
                className={s.closeImg1}
                onClick={handleAddFolderClick}
                width={30}
                height={30}
              />
            </div>
            <input className={s.modalInput} placeholder="내용 입력"></input>
            <button className={s.modalButton}>추가하기</button>
          </div>
        </div>
      ) : null}

      {isChangeFolderNameClicked ? (
        <div className="modal-background">
          <div className="modal">
            <p>
              <b>폴더 이름 변경</b>
            </p>
            <div className={s.closeContainer}>
              <Image
                src="images/modalClose.svg"
                alt="닫기 이미지"
                className={s.closeImg1}
                onClick={handleChangeFolderNameClick}
                width={30}
                height={30}
              />
            </div>
            <input
              className={s.modalInput}
              placeholder="변경할 이름 입력"
            ></input>
            <button className={s.modalButton}>변경하기</button>
          </div>
        </div>
      ) : null}

      {isDeleteFolderClicked ? (
        <div className="modal-background">
          <div className="modal">
            <b>폴더 삭제</b>
            <div className={s.closeContainer}>
              <Image
                src="images/modalClose.svg"
                className={s.closeImg2}
                onClick={handleDeleteFolderClick}
                alt="닫기 이미지"
                width={30}
                height={30}
              />
            </div>

            <div>{singleFolderName}</div>
            <button className={s.modalDeleteButton}>삭제하기</button>
          </div>
        </div>
      ) : null}

      {isShareFolderClicked ? (
        <div className="modal-background">
          <div className="modal">
            <p className={s.p}>
              <b>폴더 공유</b>
            </p>
            <p>{singleFolderName}</p>
            <div className={s.closeContainer}>
              <Image
                src="images/modalClose.svg"
                className={s.closeImg3}
                onClick={handleShareFolderClick}
                alt="닫기 이미지"
                width={30}
                height={30}
              />
            </div>
            <div className={s.shareImgContainer}>
              <button
                onClick={(e) => handleKakaoClick(e, currentLink)}
                className={s.shareButton}
              >
                <Image
                  src="images/kakao.svg"
                  alt="카카오톡 이미지"
                  width={30}
                  height={30}
                />
                카카오톡
              </button>
              <button
                onClick={(e) => handleFaceBookClick(e, currentLink)}
                className={s.shareButton}
              >
                <Image
                  src="images/facebook2.svg"
                  className={s.facebookButton}
                  alt="페이스북 이미지"
                  width={30}
                  height={30}
                />
                페이스북
              </button>
              <button
                onClick={() => handleCopyClipBoard(currentLink)}
                className={s.shareButton}
              >
                <Image
                  src="images/shareLink.svg"
                  alt="링크 복사 이미지"
                  width={30}
                  height={30}
                />
                링크 복사
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {totalData && isTotalClicked && (
        <div className="header-summary">전체</div>
      )}

      {singleFolderData && isSingleClicked && (
        <div className="header-summary">
          {singleFolderName}
          <div className="folder-data-util-buttons">
            <button onClick={handleShareFolderClick}>
              <Image
                src="/images/share.svg"
                alt="공유 이미지"
                width={19}
                height={19}
              />
              공유
            </button>
            <button onClick={handleChangeFolderNameClick}>
              <Image
                src="/images/pen.svg"
                alt="이름 변경 이미지"
                width={19}
                height={19}
              />
              이름 변경
            </button>
            <button onClick={handleDeleteFolderClick}>
              <Image
                src="/images/discard.svg"
                alt="삭제 이미지"
                width={19}
                height={19}
              />
              삭제
            </button>
          </div>
        </div>
      )}
      {searchedData && inputValue !== "" && (
        <Cards fullData={searchedData} fullFolderData={fullFolderData?.data} />
      )}
      {totalData && isTotalClicked && inputValue === "" && (
        <Cards
          fullData={totalData?.data}
          fullFolderData={fullFolderData?.data}
        />
      )}
      {singleFolderData && isSingleClicked && inputValue === "" && (
        <Cards
          fullData={singleFolderData}
          fullFolderData={fullFolderData?.data}
        />
      )}
      {singleFolderData.length === 0 && isSingleClicked && (
        <div className={s.folderList}>저장된 링크가 없습니다</div>
      )}
    </>
  );
};

export default Header;
