import Navigator from "./NavigationBar";
import FolderInfo from "./FolderInfo";
import SearchBar from "./SearchBar";
import CardSection from "./CardSection";
import Footer from "./Footer";
import { getUsers, getFolder } from "../api";
import { useState, useEffect } from "react";
import "../style/App.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    imageSource: "",
  });
  const [folderData, setFolderData] = useState({
    folderName: "",
    ownerName: "",
    ownerImage: "",
    datas: [],
  });

  const handleUserProfile = async () => {
    let userProfile;
    try {
      setIsLogin(true);
      userProfile = await getUsers();
    } catch (err) {
      console.log(err);
      setIsLogin(false);
    }
    const { email, profileImageSource } = userProfile;
    setUserData((prevData) => ({
      ...prevData,
      email,
      imageSource: profileImageSource,
    }));
  };

  const handleFolderInfo = async () => {
    let folderInfo;
    try {
      folderInfo = await getFolder();
    } catch (err) {
      console.log(err);
    }
    const {
      folder: { name, links, owner },
    } = folderInfo;
    setFolderData((prevData) => ({
      ...prevData,
      folderName: name,
      ownerName: owner["name"],
      ownerImage: owner["profileImageSource"],
      datas: links,
    }));
  };

  useEffect(() => {
    handleUserProfile();
    handleFolderInfo();
  }, []);

  return (
    <>
      <Navigator
        className={["nav", "gnb", "logo", "cta", "cta-short"]}
        isLogin={isLogin}
        data={userData}
      />
      <header>
        <FolderInfo data={folderData} />
      </header>
      <article>
        <SearchBar />
        <CardSection data={folderData.datas} />
      </article>
      <Footer />
    </>
  );
};

export default App;
