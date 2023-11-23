import React, { useContext, useState } from "react";
import AddInputSection from "../components/AddInputSection";
import Search from "../components/Search";
import UserFolder from "../components/UserFolder";
import Cards from "../components/Cards";
import { AccountContext } from "../contexts/AccountContext";
import { useFetch, useQueryFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import ModalFolder from "../modal/ModalFolder";

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

const Folder = () => {
  const { account } = useContext(AccountContext);
  const [folderOption, setFolderOption] = useState<folderOptionType | null>(
    null
  );
  const [prevKey, setPrevKey] = useState<number | null>(null);
  const [iscebabClick, setIscebabClick] = useState(false);
  const [newLink, setNewLink] = useState("");
  const { id } = account?.data[0];
  const { folderId } = useParams();

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
  console.log(folderDataObject);
  console.log(linkCardsData);
  return (
    <div className="folder">
      <AddInputSection
        handleListClick={handleListClick}
        newLink={newLink}
        setNewLink={setNewLink}
      />
      <Search />
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
  );
};

export default Folder;
