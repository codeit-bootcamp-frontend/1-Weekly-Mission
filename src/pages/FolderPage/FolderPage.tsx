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

const INITIAL_FOLDER: FolderInterface = {
  id: "",
  name: "전체",
};

function FolderPage() {
  // 폴더 이름들
  const [folderList, setFolderList] = useState<FolderInterface[]>([
    INITIAL_FOLDER,
  ]);
  // 폴더 당 카드 리스트
  const [cardList, setCardList] = useState<CardInterface[]>([]);
  // 현재 위치한 폴더 정보
  const [currentFolder, setCurrentFolder] = useState(INITIAL_FOLDER);

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
    <Layout isSticky={false}>
      <LinkAddBar />
      <div className={styles["folder-content"]}>
        <SearchBar />
        <FolderTagList
          folders={folderList}
          current={currentFolder}
          onClick={getCards}
        />
        <FolderMaker />
      </div>
      <div>
        <FolderModifier folder={currentFolder} />
      </div>
      <div className={styles["card-list-section"]}>
        <CardList cardList={cardList} />
      </div>
    </Layout>
  );
}

export default FolderPage;
