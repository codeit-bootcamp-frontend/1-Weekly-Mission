import { useState, useCallback, useEffect } from "react";
import Head from "next/head";
import { getAllCards, getFolderList } from "@/api";
import { SearchBar, CardList } from "@/components/common";
import {
  LinkAddBar,
  FolderTagList,
  FolderModifier,
  FolderMaker,
} from "@/components/folder";
import ModalCreator from "@/components/modals/ModalCreator";
import { useOpenModal } from "@/hooks";
import { CardInterface, FolderInterface } from "@/types";
import styles from "./FolderPage.module.scss";
import { useAuth } from "@/contexts/AuthProvider";
import { useRouter } from "next/router";

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
  const { user } = useAuth(true);

  const getFolderTagList = useCallback(async () => {
    const { data } = await getFolderList(user?.id);
    setFolderList(() => [INITIAL_FOLDER, ...data?.folder]);
  }, []);

  const getCards = useCallback(async (currentFolder: FolderInterface) => {
    const data = await getAllCards(user?.id, currentFolder.id);
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

  //TODO - currentFolder을 의존성에 넣으면 무한렌더링 발생. 왜?? 나중에 SSR로 고치기
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/signin");
      return;
    }
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
