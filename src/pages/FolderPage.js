import { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";
import CardList from "../components/Card/Card";
import useAsync from "../hooks/useAsync";

import { getUser, getFolder } from "../api/api";
import "../App.style.css";

const INITIAL_USER = {
  userName: "",
  userEmail: "",
  userProfileImage: "",
};

const INITIAL_FOLDER = {
  folderName: "",
  folderOwnerrName: "",
  folderOwnerProfileImage: "",
};

function FolderPage() {
  const [userValues, setUserValues] = useState(INITIAL_USER);
  const [folderValues, setFolderValues] = useState(INITIAL_FOLDER);

  const [isUserLoading, userLoadingError, getUserAsync] = useAsync(getUser);
  const [isFolderLoading, folderLoadingError, getFolderAsync] =
    useAsync(getFolder);

  const [cardList, setCardList] = useState([]);

  const loadUser = async () => {
    const userResult = await getUserAsync();
    const folderResult = await getFolderAsync();
    if (!folderResult || !userResult) return;

    const {
      name: userName = "",
      email = "",
      profileImageSource = "",
    } = userResult;
    setUserValues((prevValues) => {
      const newValues = {
        userName: userName,
        userEmail: email,
        userProfileImage: profileImageSource,
      };
      return { ...prevValues, ...newValues };
    });

    if (!folderResult.folder) return;
    const { name = "", owner = null, links = "" } = folderResult.folder;
    setFolderValues((prevValues) => {
      const newValues = {
        folderName: name,
        folderOwnerName: owner?.name,
        folderOwnerProfileImage: owner?.profileImageSource,
      };
      return { ...prevValues, ...newValues };
    });
    setCardList(links);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <Nav
        userEmail={userValues.userEmail}
        userProfile={userValues.userProfileImage}
      />
      {isUserLoading && <p> 로그인 중...</p>}
      {userLoadingError?.message && <span>{userLoadingError.message}</span>}

      <Header
        folderOwnerProfile={folderValues.folderOwnerProfileImage}
        folderName={folderValues.folderName}
        folderOwnerName={folderValues.folderOwnerName}
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

export default FolderPage;
