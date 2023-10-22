import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import { getFolder } from "../utils/api";
import "./Main.css";

const Main = ({ account, userErrorMessage }) => {
  const { name, profileImageSource } = account;
  const [personalfolder, setPersonalfolder] = useState({});
  const [folderErrorMessage, setFolderErrorMessage] = useState("");

  const handleFolderLoad = async () => {
    try {
      const {
        folder: { links, name: title },
      } = await getFolder();
      setPersonalfolder({ links, title });
    } catch (error) {
      setFolderErrorMessage(error);
    }
  };

  const { title } = personalfolder;

  useEffect(() => {
    handleFolderLoad();
  }, []);
  return (
    <div className="main">
      <div className="section-title main-section">
        <div className="section-title-inner">
          <div className="icon-wrap">
            <img src={profileImageSource} alt="코드잇아이콘" />
          </div>
          <h4>@{name}</h4>
          {userErrorMessage && <h4>{userErrorMessage.message}</h4>}
          <h3>{title}</h3>
        </div>
      </div>
      <SearchBar />
      <Cards personalfolder={personalfolder} />
      {folderErrorMessage && <h2>{folderErrorMessage.message}</h2>}
    </div>
  );
};

export default Main;
