import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import SearchBarResult from "@/components/SearchBarResult/SearchBarResult";
import useInputController from "@/hooks/useInputController";
import { MouseEvent, ReactElement, useCallback, useEffect, useState } from "react";
import { NextPageWithLayout } from "./_app";
import styles from "@/styles/folder.module.css";
import useModalController from "@/hooks/useModalController";
import AddLinkInput from "@/components/AddLinkInput/AddLinkInput";
import Modal from "@/modals/Modal";
import AddFolder from "@/modals/AddFolder";
import getCurrentUsersFolderData, { FolderInfo } from "@/API/getCurrentUsersFolderData";
import FolderNav from "@/components/FolderNav/FolderNav";
import FolderAddMenu from "@/components/FolderAddMenu/FolderAddMenu";
import getFolderName from "@/util/getFolderName";
import { useRouter } from "next/router";
import AddLinkToFolder from "@/modals/AddLinkToFolder";
import FolderName from "@/components/FolderName/FolderName";
import FolderEdit from "@/components/FolderEdit/FolderEdit";
import Share from "@/modals/Share";
import EditFolder from "@/modals/EditFolder";
import DeleteFolder from "@/modals/DeleteFolder";
import Binder from "@/components/Binder/Binder";
import FolderEmptyNoti from "@/components/FolderEmptyNoti/FolderEmptyNoti";
import getLinksByFolderID, { Linkinfo } from "@/API/getLinksByFolderID";
import Script from "next/script";
import DeleteLink from "@/modals/DeleteLink";

const Folder: NextPageWithLayout = () => {
  const modal = useModalController(true);

  const router = useRouter();

  const searchBox = useInputController({});
  const addLinkInput = useInputController({});

  // 모달 내 인풋 컨트롤라
  const addFolder = useInputController({});
  const editFolder = useInputController({});

  const [folderList, setFolderList] = useState<FolderInfo[]>([]);
  const [cards, setCards] = useState<Linkinfo[]>([]);
  const [targetURL, setTargetURL] = useState("");

  const handleSearchBarDeleteIconClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchBox.setValues("");
  };

  function handleClick(e: MouseEvent) {
    e.preventDefault();
    const { value } = e.target as HTMLButtonElement;
    router.push(`/folder?folderId=${value}`);
  }

  const { folderId } = router.query;
  const folderName = getFolderName(folderId, folderList);

  const loadFolderData = async () => {
    const { data } = await getCurrentUsersFolderData(1);

    setFolderList(() => {
      return [...data];
    });
  };

  const loadcardData = useCallback(async () => {
    const { data } = await getLinksByFolderID(1, folderId);

    setCards(() => {
      return [...data];
    });
  }, [folderId]);

  useEffect(() => {
    loadFolderData();
  }, []);

  useEffect(() => {
    loadcardData();
  }, [folderId, loadcardData]);

  return (
    <>
      <AddLinkInput
        onChange={addLinkInput.handleChange}
        setTarget={modal.setTarget}
        value={addLinkInput.values}
        onSubmit={modal.handleClick}
      />

      <section className={styles.root}>
        <SearchBar
          value={searchBox.values}
          onChange={searchBox.handleChange}
          onClick={handleSearchBarDeleteIconClick}
        />
        {searchBox.values && <SearchBarResult value={searchBox.values} />}
        <div className={styles.flex}>
          <FolderNav onClick={handleClick} folderID={folderId} folderList={folderList} />
          <FolderAddMenu onClick={modal.handleClick} setTarget={modal.setTarget} />
        </div>

        <div className={styles.flex}>
          <FolderName>{folderName}</FolderName>
          {folderName !== "전체" && <FolderEdit onClick={modal.handleClick} setTarget={modal.setTarget} />}
        </div>
        {cards.length ? (
          <Binder
            cards={cards}
            onClick={modal.handleClick}
            setTarget={modal.setTarget}
            setTargetURL={setTargetURL}
            shared={false}
            searchValue={searchBox.values}
          />
        ) : (
          <FolderEmptyNoti />
        )}
      </section>

      {modal.state && (
        <Modal onClick={modal.handleClick}>
          {(() => {
            if (modal.target === "AddFolder") {
              return <AddFolder onChange={addFolder.handleChange} value={addFolder.values} />;
            }
            if (modal.target === "AddLinkToFolderFromInput") {
              return <AddLinkToFolder folderList={folderList}>{addLinkInput.values}</AddLinkToFolder>;
            }
            if (modal.target === "AddLinkToFolderFromCard") {
              return <AddLinkToFolder folderList={folderList}>{targetURL}</AddLinkToFolder>;
            }
            if (modal.target === "shareFolder") {
              return <Share folderId={folderId}>{folderName}</Share>;
            }
            if (modal.target === "changeFolderName") {
              return <EditFolder onChange={editFolder.handleChange} value={editFolder.values}></EditFolder>;
            }
            if (modal.target === "deleteFolder") {
              return <DeleteFolder>{folderName}</DeleteFolder>;
            }
            if (modal.target === "deleteLink") {
              return <DeleteLink>{targetURL}</DeleteLink>;
            }
          })()}
        </Modal>
      )}
    </>
  );
};

// (페이지 컴포넌트 이름).getLayout 으로 호출.
Folder.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" />
      <Header position="static" />
      <main>{page}</main>
      <Footer />
    </>
  );
};

export default Folder;
