import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import CardList from "./components/Card";

import { getUser, getUserFolder } from "./api";
import "./styles/app.css";

function App() {
  // const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userProfileImage, setUserProfileImage] = useState("");

  const [folderUserProfileImage, setFolderUserProfileImage] = useState("");
  const [folderName, setFolderName] = useState("");
  const [folderUserName, setFolderUserName] = useState("");

  const [cardList, setCardList] = useState([]);

  const loadUser = async () => {
    const { name, email, profileImageSource } = await getUser();
    // setUserName(name);
    setUserEmail(email);
    setUserProfileImage(profileImageSource);
  };
  const loadUserFolder = async () => {
    const { folder } = await getUserFolder();
    setFolderUserProfileImage(folder.owner.profileImageSource);
    setFolderName(folder.name);
    setFolderUserName(folder.owner.name);
    setCardList(folder.links);
  };

  useEffect(() => {
    loadUser();
    loadUserFolder();
  }, []);
  return (
    <>
      <Nav userEmail={userEmail} userProfile={userProfileImage} />
      <Header
        folderUserProfile={folderUserProfileImage}
        folderName={folderName}
        folderUserName={folderUserName}
      />
      <section className="section">
        <div className="search-section">
          <SearchBar />
        </div>
        <div className="card-section">
          <CardList cardList={cardList} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
