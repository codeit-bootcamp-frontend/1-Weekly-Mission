import { useState, useCallback, useEffect } from "react";
import styles from "./FolderPage.module.scss";
import { SearchBar, CardList } from "@/components/common";
import { getAllCards, getFolderList } from "@/api";
import { CardInterface, FolderInterface } from "@/types";
import {
  LinkAddBar,
  FolderTagList,
  FolderModifier,
  FolderMaker,
} from "../../components/folder";
import ModalCreator from "@/components/modals/ModalCreator";
import { useOpenModal } from "@/hooks";
import Head from "next/head";

const INITIAL_FOLDER: FolderInterface = {
  id: "",
  name: "전체",
};

export default function FolderPage() {
  const [folderList, setFolderList] = useState<FolderInterface[]>([
    INITIAL_FOLDER,
  ]);
  const [cardList, setCardList] = useState<CardInterface[]>([]);
  const [currentFolder, setCurrentFolder] = useState(INITIAL_FOLDER);
  const { modal, handleOpenModal, handleCloseModal } = useOpenModal();
  const [keyword, setKeyword] = useState("");

  const getFolderTagList = useCallback(async () => {
    const { data } = await getFolderList();
    setFolderList(() => [INITIAL_FOLDER, ...data]);
  }, []);

  const getCards = useCallback(async (currentFolder: FolderInterface) => {
    const data = await getAllCards(currentFolder.id);
    if (data) {
      const nextFolder = {
        id: currentFolder.id,
        name: currentFolder.name,
      };
      setCurrentFolder(() => {
        return { ...nextFolder };
      });
      setCardList(() => {
        return [...data];
      });
    }
    return data;
  }, []);

  useEffect(() => {
    getFolderTagList();
    getCards(currentFolder);
  }, [getFolderTagList, getCards]);

  return (
    <>
      <Head>
        <title>folder</title>
      </Head>

      {modal && modal.show && (
        <ModalCreator onClick={handleCloseModal}>
          {modal?.component}
        </ModalCreator>
      )}

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
          folderList={folderList}
          onClick={handleOpenModal}
          keyword={keyword}
        />
      </div>
    </>
  );
}
