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

  const [isUserLoading, userLoadingError, getUserAsync] = useAsync(getUser);
  const [isFolderLoading, folderLoadingError, getFolderAsync] =
    useAsync(getUserFolder);

  const [folderUserProfileImage, setFolderUserProfileImage] = useState("");
  const [folderName, setFolderName] = useState("");
  const [folderUserName, setFolderUserName] = useState("");

  const [cardList, setCardList] = useState([]);

  const loadUser = async () => {
    const userResult = await getUserAsync();
    const folderResult = await getFolderAsync();
    if (!folderResult || !userResult) return;

    const { name: userName, email, profileImageSource } = userResult;
    setUserName(userName);
    setUserEmail(email);
    setUserProfileImage(profileImageSource);

    const { folder } = folderResult;
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
      {isUserLoading && <p> 로그인 중...</p>}
      {userLoadingError?.message && <span>{userLoadingError.message}</span>}

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
          {isFolderLoading && <p> 유저 정보를 받아오는 중...</p>}
          {folderLoadingError?.message && (
            <span>{folderLoadingError.message}</span>
          )}
          <CardList cardList={cardList} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
