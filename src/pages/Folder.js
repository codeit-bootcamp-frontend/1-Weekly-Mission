import { useCallback, useEffect, useState } from "react";
import styles from "../styles/Folder.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FolderInfo from "../components/FolderInfo";
import Card from "../components/Card";
import getFolder from "../api/getFolder";
import Search from "../components/Search";
import useAsync from "../hooks/useAsync";

const Folder = () => {
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
        <FolderInfo folderData={folderData} />
      </header>
      <main>
        <Search />
        <Card folderData={folderData} />
        {isLoading && <p>데이터를 불러오는 중 입니다.</p>}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Folder;
