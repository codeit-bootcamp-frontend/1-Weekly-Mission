import { useState, useEffect, useCallback } from "react";
import { AddBar, SearchBar, FolderLists, CardSection } from "components";
import { getFolderLists, getLinks } from "utils/api";
import styles from "./FolderPage.module.css";

const FolderPage = () => {
  const [folderId, setFolderId] = useState("");
  const [headContext, setHeadContext] = useState("전체");
  const [folderListsData, setFolderListsData] = useState({
    datas: [],
  });
  const [linksData, setLinksData] = useState({
    datas: [],
  });

  const handleFolderLists = useCallback(async (id) => {
    try {
      const [folderLists, links] = await Promise.all([
        getFolderLists(),
        getLinks(id),
      ]);
      const { data: folderDatas } = folderLists;
      const { data: LinkDatas } = links;
      setFolderListsData((prevData) => ({
        ...prevData,
        datas: folderDatas,
      }));
      setLinksData((prevData) => ({
        ...prevData,
        datas: LinkDatas,
      }));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    handleFolderLists(folderId);
  }, [folderId, handleFolderLists]);

  const handleButtonClick = (id, name) => {
    setFolderId(id);
    setHeadContext(name);
  };

  return (
    <>
      <header className={styles.header}>
        <AddBar />
      </header>
      <article className={styles.article}>
        <SearchBar />
        <FolderLists
          folderData={folderListsData.datas}
          onClick={handleButtonClick}
          title={headContext}
        />
        <CardSection data={linksData.datas} />
      </article>
    </>
  );
};

export default FolderPage;
