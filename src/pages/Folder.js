import "../styles/Folder.css";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FolderInfo from "../components/FolderInfo";
import Card from "../components/Card";
import getFolder from "../api/getFolder";

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
      <div className="header">
        <NavBar />
        <FolderInfo folderData={folderData} />
      </div>
      <Card folderData={folderData} />
      <Footer />
    </>
  );
};

export default Folder;
