import { useState, useCallback, useEffect } from "react";
import styles from "./FolderPage.module.scss";
import Layout from "../Layout/Layout";
import { SearchBar, CardList } from "src/commons/components";
import { getAllCards, getFolderList } from "src/apis";
import { CardInterface, FolderInterface, ModalInterface } from "src/types";
import {
  LinkAddBar,
  FolderTagList,
  FolderModifier,
  FolderMaker,
} from "./components";
import ModalCreator from "src/commons/modals/ModalCreator";

const INITIAL_FOLDER: FolderInterface = {
  id: "",
  name: "전체",
};

const INITIAL_MODAL: ModalInterface = {
  show: false,
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
  // 모달이 보이는지
  const [modal, setModal] = useState(INITIAL_MODAL);

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

  const handleOpenModal = (modal: ModalInterface) => {
    console.log(modal);
    setModal((prev) => {
      return { ...prev, ...modal };
    });
  };
  const handleCloseModal = () => {
    setModal((prev) => {
      return { ...prev, ...INITIAL_MODAL };
    });
  };

  useEffect(() => {
    getFolderTagList();
    getCards(currentFolder);
  }, [getFolderTagList, getCards]);

  return (
    <>
      {modal.show && (
        <ModalCreator onClick={handleCloseModal}>
          {modal?.component}
        </ModalCreator>
      )}

      <Layout isSticky={false}>
        <LinkAddBar />
        <div className={styles["folder-content"]}>
          <SearchBar />
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
          <CardList cardList={cardList} onClick={handleOpenModal} />
        </div>
      </Layout>
    </>
  );
}

export default FolderPage;
