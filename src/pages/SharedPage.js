import { useCallback, useEffect, useState } from "react";
import styles from "./SharedPage.module.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import FolderInfo from "../components/FolderInfo/FolderInfo";
import Card from "../components/Card/Card";
import getFolder from "../api/getFolder";
import Search from "../components/Search/Search";
import useAsync from "../hooks/useAsync";
import Loadable from "./../components/Skeleton/Loadable";
import FolderInfoSkeleton from "./../components/Skeleton/FolderInfoSkeleton/FolderInfoSkeleton";
import CardListSkeleton from "../components/Skeleton/CardListSkeleton/CardListSkeleton";

const SharedPage = () => {
  const [folderData, setFolderData] = useState([]);
  const [isLoading, getFolerAsync] = useAsync(getFolder);

  const handleLoadFolderData = useCallback(async () => {
    setFolderData(await getFolerAsync());
  }, [getFolerAsync]);

  useEffect(() => {
    handleLoadFolderData();
  }, [handleLoadFolderData]);

  return (
    <>
      <header className={styles.header}>
        <NavBar />
        <Loadable isLoading={isLoading} fallback={<FolderInfoSkeleton />}>
          <FolderInfo folderData={folderData} />
        </Loadable>
      </header>
      <main>
        <Search />
        <Loadable isLoading={isLoading} fallback={<CardListSkeleton size={9} />}>
          <Card folderData={folderData} />
        </Loadable>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SharedPage;
