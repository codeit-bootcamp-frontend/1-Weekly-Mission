import React, { useContext, useEffect, useRef, useState } from "react";
import AddInputSection from "../components/AddInputSection";
import Search from "../components/Search";
import UserFolder from "../components/UserFolder";
import Cards from "../components/Cards";
import { AccountContext } from "../contexts/AccountContext";
import { useFetch, useQueryFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import ModalFolder from "../modal/ModalFolder";
import ObserveAddInput from "../components/ObserveAddInput";

type folderOptionType = {
  title: string;
  btnName: string;
  dataItem: string | null;
  share?: { id: number | null; folderId?: string | null };
  folderData: any;
};

type modalBgType = {
  background: string;
  opacity: string;
  width: string;
  height: string;
  position: any;
  top: string;
  left: string;
  transform: string;
};

interface FolderType {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSecondVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchResult: React.Dispatch<React.SetStateAction<string>>;
}

const modalBg: modalBgType = {
  background: "#000",
  opacity: "0.4",
  width: "100%",
  height: "100%",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const Folder = ({
  setIsVisible,
  setIsSecondVisible,
  setSearchResult,
}: FolderType) => {
  const { account, isVisible, isSecondVisible, searchResult } =
    useContext(AccountContext);
  const [folderOption, setFolderOption] = useState<folderOptionType | null>(
    null
  );
  const [prevKey, setPrevKey] = useState<number | null>(null);
  const [iscebabClick, setIscebabClick] = useState(false);
  const [newLink, setNewLink] = useState("");
  const { id } = account?.data[0];
  const { folderId } = useParams();
  const targetElement = useRef(null);
  const targetSecondElement = useRef(null);

  const { data: folderDataObject, errorMessage: foldersErrorMessage } =
    useFetch(`users/${id}/folders`, id);
  const { data: linkCardsData, errorMessage: linksErrorMessage }: any | string =
    useQueryFetch(`users/${id}/links`, folderId, id);

  const handleCebabClick = (
    event: React.MouseEvent<HTMLImageElement>,
    itemId: number
  ) => {
    event.preventDefault();
    setPrevKey(itemId);
    setIscebabClick(!iscebabClick);
  };

  const handleListClick = (
    event: React.MouseEvent<HTMLLIElement>,
    title: string,
    btn: string,
    item: string | null = null
  ) => {
    if (iscebabClick) {
      event.preventDefault();
      setIscebabClick(!iscebabClick);
    }

    if (title === "폴더에 추가" && !item) {
      alert("링크를 입력해주세요");
    } else {
      setFolderOption({
        title,
        btnName: btn,
        dataItem: item,
        share: { id, folderId },
        folderData: folderDataObject,
      });
    }
  };
  /*  console.log(linkCardsData); */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // entries는 관찰 대상 요소의 배열
        entries.forEach((entry) => {
          /* observer */
          if (entry.isIntersecting && entry.target.className === "observer") {
            // 요소가 뷰포트에 들어왔을 때
            setIsVisible(true);
          } else if (
            !entry.isIntersecting &&
            entry.target.className === "observer"
          ) {
            // 요소가 뷰포트에서 벗어났을 때
            setIsVisible(false);
          }

          /* observerSecond */
          if (
            entry.isIntersecting &&
            entry.target.className === "observerSecond"
          ) {
            setIsSecondVisible(true);
          } else if (
            !entry.isIntersecting &&
            entry.target.className === "observerSecond"
          ) {
            setIsSecondVisible(false);
          }
        });
      },
      {
        // 옵션: root, rootMargin, threshold
        /*  root: targetElement.current, */
        /* rootMargin: "50px", */
        threshold: 0.3, // 요소의 30%가 보일 때 콜백 실행
      }
    );

    // 관찰 시작
    if (targetElement.current) {
      observer.observe(targetElement.current);
    }

    if (targetSecondElement.current) {
      observer.observe(targetSecondElement.current);
    }

    // 컴포넌트가 언마운트될 때 관찰 종료
    return () => {
      if (targetElement.current) {
        observer.unobserve(targetElement.current);
      }
      if (targetSecondElement.current) {
        observer.unobserve(targetSecondElement.current);
      }
    };
  }, []); // 빈 의존성 배열로 마운트 시에만 실행

  return (
    <>
      <div className="folder">
        <AddInputSection
          handleListClick={handleListClick}
          newLink={newLink}
          setNewLink={setNewLink}
        />
        {!isVisible && !isSecondVisible ? (
          <ObserveAddInput
            handleListClick={handleListClick}
            newLink={newLink}
            setNewLink={setNewLink}
          />
        ) : null}
        <div className="observer" ref={targetElement}></div>
        <Search setSearchResult={setSearchResult} searchResult={searchResult} />

        {!foldersErrorMessage ? (
          <UserFolder
            folderDataObject={folderDataObject}
            folderId={folderId}
            handleListClick={handleListClick}
          />
        ) : (
          foldersErrorMessage && (
            <div className="user-folder">{foldersErrorMessage}</div>
          )
        )}
        {!linksErrorMessage ? (
          linkCardsData?.data.length > 0 ? (
            <Cards
              linkCardsData={linkCardsData}
              prevKey={prevKey}
              handleCebabClick={handleCebabClick}
              handleListClick={handleListClick}
              iscebabClick={iscebabClick}
              searchResult={searchResult}
            />
          ) : (
            <h3 className="noLink">저장된 링크가 없습니다</h3>
          )
        ) : (
          <div className="section-title section-title-third">
            {linksErrorMessage}
          </div>
        )}
        {folderOption ? (
          <>
            <div className="modal-bg" style={modalBg}></div>
            <ModalFolder
              folderOption={folderOption}
              setFolderOption={setFolderOption}
              setNewLink={setNewLink}
            />
          </>
        ) : null}
      </div>
      <div className="observerSecond" ref={targetSecondElement}></div>
    </>
  );
};

export default Folder;
