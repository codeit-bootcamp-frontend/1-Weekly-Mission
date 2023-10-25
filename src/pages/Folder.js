import { useEffect, useState } from "react";
import "../styles/Folder.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FolderInfo from "../components/FolderInfo";
import Card from "../components/Card";
import getFolder from "../api/getFolder";
import Search from "../components/Search";

const Folder = () => {
  const [folderData, setFolderData] = useState([]);

  const handleLoadFolderData = async () => {
    try {
      setFolderData(await getFolder());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoadFolderData();
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <FolderInfo folderData={folderData} />
      </header>
      <main>
        <Search />
        <Card folderData={folderData} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Folder;
