import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getUser, getUserFolder } from "./api";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userProfileImage, setUserProfileImage] = useState("");

  const [folderUserProfileImage, setFolderUserProfileImage] = useState("");
  const [folderName, setFolderName] = useState("");
  const [folderUserName, setFolderUserName] = useState("");

  const [cardList, setCardList] = useState([]);

  const loadUser = async () => {
    const { name, email, profileImageSource } = await getUser();
    setUserName(name);
    setUserEmail(email);
    setUserProfileImage(profileImageSource);
  };
  const loadUserFolder = async () => {
    const { folder, links } = await getUserFolder();
    setFolderUserProfileImage(folder.owner.profileImageSource);
    setFolderName(folder.name);
    setFolderUserName(folder.owner.name);
    setCardList(links);
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
      <div>{/* <CardList cards={cardList} /> */}</div>
      <Footer />
    </>
  );
}

export default App;
