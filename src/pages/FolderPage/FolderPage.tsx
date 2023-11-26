import { useState, useCallback, useEffect } from "react";
import styles from "./FolderPage.module.scss";
import Layout from "../Layout/Layout";
import { SearchBar, CardList } from "src/commons/components";
import { getAllCards, getFolderList } from "src/apis";
import { CardInterface, FolderInterface } from "src/types";
import {
  LinkAddBar,
  FolderTagList,
  FolderModifier,
  FolderMaker,
} from "./components";
import ModalCreator from "src/commons/modals/ModalCreator";
import { useKeywordInput, useOpenModal } from "src/hooks";
const INITIAL_FOLDER: FolderInterface = {
  id: "",
  name: "전체",
};

function FolderPage() {
  const [folderList, setFolderList] = useState<FolderInterface[]>([
    INITIAL_FOLDER,
  ]);
  const [cardList, setCardList] = useState<CardInterface[]>([]);
  const [currentFolder, setCurrentFolder] = useState(INITIAL_FOLDER);
  const { modal, handleOpenModal, handleCloseModal } = useOpenModal();
  const { keyword, handleKeywordInput: setKeyword } = useKeywordInput("");

  const getFolderTagList = useCallback(async () => {
    const { data } = await getFolderList();
    setFolderList(() => [INITIAL_FOLDER, ...data]);
  }, []);

  const getCards = useCallback(async (currentFolder: FolderInterface) => {
    const { data } = await getAllCards(currentFolder.id);
    const nextFolder = {
      id: currentFolder.id,
      name: currentFolder.name,
    };
    if (data) {
      setCurrentFolder((prev) => {
        return { ...prev, ...nextFolder };
      });
      setCardList(() => {
        return [...data];
      });
    }
  }, []);

  useEffect(() => {
    getFolderTagList();
    getCards(currentFolder);
  }, [getFolderTagList, getCards]);

  return (
    <>
      {modal && modal.show && (
        <ModalCreator onClick={handleCloseModal}>
          {modal?.component}
        </ModalCreator>
      )}

      <Layout isSticky={false}>
        <LinkAddBar />
        <div className={styles["folder-content"]}>
          <SearchBar onChange={setKeyword} keys={keyword} />
          {keyword && (
            <div className={styles["result-section"]}>
              <h1>
                <span>{keyword}</span>으로 검색한 결과입니다.
              </h1>
            </div>
          )}
          <FolderTagList
            folders={folderList}
            current={currentFolder}
            onClick={getCards}
          />
          <FolderMaker onClick={handleOpenModal} />
        </div>
        <div>
          <FolderModifier folder={currentFolder} onClick={handleOpenModal} />
        </div>
        <div className={styles["card-list-section"]}>
          <CardList
            cardList={cardList}
            onClick={handleOpenModal}
            keyword={keyword}
          />
        </div>
      </Layout>
    </>
  );
}

export default FolderPage;
