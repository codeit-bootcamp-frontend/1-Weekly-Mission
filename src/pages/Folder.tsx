import SearchBar from "../components/SearchBar/SearchBar";
import FolderNav from "../components/FolderNav/FolderNav";
import AddLinkInput from "../components/AddLinkInput/AddLinkInput";
import FolderAddMenu from "../components/FolderAddMenu/FolderAddMenu";
import FolderName from "../components/FolderName/FolderName";
import Binder from "../components/Binder/Binder";
import FolderEdit from "../components/FolderEdit/FolderEdit";
import FolderEmptyNoti from "../components/FolderEmptyNoti/FolderEmptyNoti";

import styles from "./Folder.module.css";
import { FormEvent, MouseEvent, useCallback, useEffect, useState } from "react";

import { Navigate, useSearchParams } from "react-router-dom";
import getFolderListsByUser from "../apis/folder/getFolderListsByUser";
import getLinksByUsersFolder from "../apis/link/getLinksByUsersFolder";
import useAuth from "../hooks/useAuth";
import Share from "../modals/Share";
import Modal from "../modals/Modal";
import getFolderName from "../utils/getFolderName";
import useModalColtroller from "../hooks/useModalController";
import DeleteFolder from "../modals/DeleteFolder";
import AddFolder from "../modals/AddFolder";
import useInputController from "../hooks/useInputController";
import EditFolder from "../modals/EditFolder";
import AddLinkToFolder from "../modals/AddLinkToFolder";
import DeleteLink from "../modals/DeleteLink";

type FolderData = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
};

type CardData = {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
};

function Folder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cards, setCards] = useState<CardData[]>([]);
  const [folderLists, setFolderLists] = useState<FolderData[]>([]);
  const { isAuth } = useAuth();

  // 모달 컨트롤라
  const shareModal = useModalColtroller();
  const editFolderModal = useModalColtroller();
  const addFolderModal = useModalColtroller();
  const deleteFolderModal = useModalColtroller();
  const addLinkToFolderFromInputModal = useModalColtroller(true);
  const deleteLinkModal = useModalColtroller(true);
  const addLinkToFolderFromFolderModal = useModalColtroller(true);

  // 모달 내 인풋 컨트롤라
  const addFolder = useInputController({});
  const editFolder = useInputController({});

  // AddLinkInput 인풋 컨트롤라
  const addLinkInput = useInputController({});

  //
  const [targetURL, setTargetURL] = useState("");

  const folderID = searchParams.get("folderId") as string;

  function handleClick(e: MouseEvent) {
    e.preventDefault();
    const { name, value } = e.target as HTMLButtonElement;
    searchParams.set(name, value);
    setSearchParams(searchParams);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const { name, value } = e.target as HTMLFormElement;
    searchParams.set(name, value);
    setSearchParams(searchParams);
  }

  const loadFolderData = async () => {
    const { data } = await getFolderListsByUser("1");

    setFolderLists((prevFolderList) => {
      return [...prevFolderList, ...data];
    });
  };

  const loadcardData = useCallback(async () => {
    const { data } = await getLinksByUsersFolder("1", folderID);

    setCards(() => {
      return [...data];
    });
  }, [folderID]);

  const folderName = getFolderName(folderID, folderLists);

  useEffect(() => {
    loadFolderData();
  }, []);

  useEffect(() => {
    loadcardData();
  }, [folderID, loadcardData]);

  if (!isAuth()) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <AddLinkInput
        onChange={addLinkInput.handleChange}
        value={addLinkInput.values}
        onClick={addLinkToFolderFromInputModal.handleClick}
        onSubmit={handleSubmit}
      />
      <section className={styles.root}>
        <SearchBar />
        <div className={styles.flex}>
          <FolderNav onClick={handleClick} folderID={folderID} folderLists={folderLists} />
          <FolderAddMenu onClick={addFolderModal.handleClick} />
        </div>
        <div className={styles.flex}>
          <FolderName>{folderName}</FolderName>
          {folderName !== "전체" && (
            <FolderEdit
              shareModal={shareModal.handleClick}
              deleteModal={deleteFolderModal.handleClick}
              editModal={editFolderModal.handleClick}
            />
          )}
        </div>
        {cards.length ? (
          <Binder
            cards={cards}
            deleteLinkModalControl={deleteLinkModal.handleClick}
            addLinkModalControl={addLinkToFolderFromFolderModal.handleClick}
            setTargetURL={setTargetURL}
            shared={false}
          />
        ) : (
          <FolderEmptyNoti />
        )}
      </section>
      {shareModal.state && (
        <Modal onClick={shareModal.handleClick}>
          <Share>{folderName}</Share>
        </Modal>
      )}
      {editFolderModal.state && (
        <Modal onClick={editFolderModal.handleClick}>
          <EditFolder onChange={editFolder.handleChange} value={editFolder.values}>
            {folderName}
          </EditFolder>
        </Modal>
      )}
      {deleteFolderModal.state && (
        <Modal onClick={deleteFolderModal.handleClick}>
          <DeleteFolder>{folderName}</DeleteFolder>
        </Modal>
      )}
      {addFolderModal.state && (
        <Modal onClick={addFolderModal.handleClick}>
          <AddFolder onChange={addFolder.handleChange} value={addFolder.values}>
            {folderName}
          </AddFolder>
        </Modal>
      )}
      {deleteLinkModal.state && (
        <Modal onClick={deleteLinkModal.handleClick}>
          <DeleteLink>{targetURL}</DeleteLink>
        </Modal>
      )}
      {addLinkToFolderFromFolderModal.state && (
        <Modal onClick={addLinkToFolderFromFolderModal.handleClick}>
          <AddLinkToFolder folderLists={folderLists}>{targetURL}</AddLinkToFolder>
        </Modal>
      )}
      {addLinkToFolderFromInputModal.state && (
        <Modal onClick={addLinkToFolderFromInputModal.handleClick}>
          <AddLinkToFolder folderLists={folderLists}>{addLinkInput.values}</AddLinkToFolder>
        </Modal>
      )}
    </>
  );
}
export default Folder;
