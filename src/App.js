import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import CardList from "./components/Card/Card";
import useAsync from "./hooks/useAsync";

import { getUser, getUserFolder } from "../src/api/api";
import "./App.style.css";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userProfileImage, setUserProfileImage] = useState("");

  const [isLoading, loadingError, getUserAsync] = useAsync(getUser);

  const [folderUserProfileImage, setFolderUserProfileImage] = useState("");
  const [folderName, setFolderName] = useState("");
  const [folderUserName, setFolderUserName] = useState("");

  const [cardList, setCardList] = useState([]);

  const loadUser = async () => {
    const result = await getUserAsync();
    if (!result) return;

    const { name: userName, email, profileImageSource } = result;
    setUserName(userName);
    setUserEmail(email);
    setUserProfileImage(profileImageSource);

    const { folder } = await getUserFolder();
    setFolderUserProfileImage(folder.owner.profileImageSource);
    setFolderName(folder.name);
    setFolderUserName(folder.owner.name);
    setCardList(folder.links);
  };

  useEffect(() => {
    loadUser();
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
