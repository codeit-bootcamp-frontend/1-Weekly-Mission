import React, { useEffect, useState } from "react";
import { getFolder } from "../api/api";
import "../styles/landing.css";
import Search from "../components/Search/Search";
import Cards from "../components/Cards/Cards";

const Header = () => {
  const [profile, setProfile] = useState("");
  const [userName, setUserName] = useState("");
  const [folderName, setFolderName] = useState("");
  const [fullData, setFullData] = useState([]);
  const getFolderOwner = async () => {
    const temp = await getFolder();
    setProfile(temp?.folder?.owner?.profileImageSource);
    setUserName(temp?.folder?.owner?.name);
    setFolderName(temp?.folder?.name);
    setFullData(temp?.folder?.links);
  };

  useEffect(() => {
    getFolderOwner();
  }, []);

  console.log(fullData);

  return (
    <>
      <header>
        <div className="hero-header" style={{ paddingBottom: "6rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <img src={profile} alt="폴더프로파일" style={{ width: "5.5rem" }} />
            <p style={{ fontSize: "1.6rem" }}>{userName}</p>
            <p style={{ fontSize: "4rem", fontWeight: "600" }}>{folderName}</p>
          </div>
        </div>
      </header>
      <Search />
      {fullData && <Cards fullData={fullData} />}
    </>
  );
};

export default Header;
