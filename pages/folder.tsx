import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import useInputController from "@/hooks/useInputController";
import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "./_app";
import styles from "@/styles/folder.module.css";
import useModalController from "@/hooks/useModalController";
import AddLinkInput from "@/components/AddLinkInput/AddLinkInput";
import getCurrentUsersFolderData, { FolderInfo } from "@/API/getCurrentUsersFolderData";
import FolderNav from "@/components/FolderNav/FolderNav";
import FolderAddMenu from "@/components/FolderAddMenu/FolderAddMenu";
import getFolderName from "@/util/getFolderName";
import FolderName from "@/components/FolderName/FolderName";
import FolderEdit from "@/components/FolderEdit/FolderEdit";
import Binder from "@/components/Binder/Binder";
import FolderEmptyNoti from "@/components/FolderEmptyNoti/FolderEmptyNoti";
import getLinksByFolderID, { Linkinfo } from "@/API/getLinksByFolderID";
import Script from "next/script";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { parse } from "path";
import getCurrentUserData from "@/API/getCurrentUserData";
import FolderModal from "@/components/FolderModal/FolderModal";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.headers.cookie;
  let folderId: undefined | string | string[];

  if (context.query["folderId"]) {
    folderId = context.query["folderId"] as string;
  } else {
    folderId = "0";
  }

  let accessToken = "";

  if (cookies) {
    const parsedCookies = parse(cookies);
    const base = parsedCookies.base;
    accessToken = base.slice(12);
  }

  const userResult = await getCurrentUserData(accessToken);

  const {
    data: [{ id: userId }],
  } = userResult;

  const folderResult = await getCurrentUsersFolderData(userId);
  const { data: folderList } = folderResult;

  const LinkResult = await getLinksByFolderID(userId, folderId);
  const { data: LinkList } = LinkResult;

  return {
    props: { folderId, folderList, LinkList },
  };
};

const Folder: NextPageWithLayout = ({
  folderId,
  folderList,
  LinkList,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const modal = useModalController(true);

  const searchBar = useInputController({});
  const addLinkInput = useInputController({});

  // 모달 내 인풋 컨트롤라
  const addFolder = useInputController({});
  const editFolder = useInputController({});

  const [getFolderList, setFolderList] = useState<FolderInfo[]>(folderList);
  const [cards, setCards] = useState<Linkinfo[]>(LinkList);
  const [targetURL, setTargetURL] = useState("");

  useEffect(() => {
    setFolderList(folderList);
  }, [folderList]);

  useEffect(() => {
    setCards(LinkList);
  }, [LinkList]);

  const folderName = getFolderName(folderId, getFolderList);

  const folderConfig = {
    addLinkInputConfig: {
      onChange: addLinkInput.handleChange,
      value: addLinkInput.values,
      onSubmit: modal.handleClick,
      setTarget: modal.setTarget,
    },

    folderNavConfig: {
      folderID: folderId,
      folderList: getFolderList,
    },

    binderConfig: {
      cards,
      onClick: modal.handleClick,
      setTarget: modal.setTarget,
      setTargetURL,
      searchValue: searchBar.values,
    },

    folderModalConfig: {
      modal,
      addFolder,
      addLinkInput,
      targetURL,
      folderName,
      folderList,
      folderId,
      editFolder,
    },
  };

  return (
    <>
      <AddLinkInput {...folderConfig.addLinkInputConfig} />

      <section className={styles.root}>
        <SearchBar searchBar={searchBar} />
        <div className={styles.flex}>
          <FolderNav {...folderConfig.folderNavConfig} />
          <FolderAddMenu modal={modal} />
        </div>

        <div className={styles.flex}>
          <FolderName>{folderName}</FolderName>
          {folderName !== "전체" && <FolderEdit modal={modal} />}
        </div>
        {cards.length ? <Binder {...folderConfig.binderConfig} /> : <FolderEmptyNoti />}
      </section>

      {modal.state && <FolderModal {...folderConfig.folderModalConfig} />}
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
