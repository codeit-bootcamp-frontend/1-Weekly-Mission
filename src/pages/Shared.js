import { useState, useEffect } from "react";
import "../styles/shared.css";
import Header from "../layout/Header";
import Hero from "../layout/Hero";
import Search from "../components/Search";
import CardList from "../components/CardList";
import Footer from "../layout/Footer";
import getUserData from "../api/getUserData";
import getFolderData from "../api/getFolderData";

function Shared() {
  const [userData, setUserData] = useState({});
  const [folderData, setFolderData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res_user = await getUserData();
        const res_folder = await getFolderData();
        setUserData(res_user);
        setFolderData(res_folder.folder);
        console.log(res_folder.folder);
        console.log(res_folder.folder.owner);
        console.log(res_folder.folder.owner.name);
        console.log(res_folder.folder.owner.profileImageSource);
      } catch (error) {
        throw new Error("사용자 계정 정보, 폴더 정보 가져오기 실패");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header
        userEmail={userData.email}
        profileImgSrc={userData.profileImageSource}
      />
      <Hero />
      {/* <Hero
        ownername={folderData.owner.name}
        profileImgSrc={folderData.owner.profileImageSource}
        foldername={folderData.name}
      /> */}
      <div className="main">
        <Search />
        <CardList folder={folderData} />
      </div>
      <Footer />
    </div>
  );
}

export default Shared;
