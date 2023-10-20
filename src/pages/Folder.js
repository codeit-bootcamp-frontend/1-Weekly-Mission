import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import getUser from "../api/getUser";
import FolderInfo from "../components/FolderInfo";
import "../styles/Folder.css";
const Folder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState("");

  const handleUserData = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      setUserData(await getUser());
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="header">
        <NavBar userData={userData} isLoading={isLoading} onClick={handleUserData} />
        <FolderInfo userData={userData} />
      </div>
      <Footer />
    </>
  );
};

export default Folder;
