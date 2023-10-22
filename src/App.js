import "./App.css";
import { CardList } from "./components/CardList";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getFolderData, getUserData } from "./services/api";
import { useEffect, useState, useCallback } from "react";

function App() {
  const [cards, setcards] = useState([]);
  const [folderInfo, setFolderInfo] = useState({});
  const [owner, setOwner] = useState({});
  const [user, setUser] = useState([]);

  const getdata = useCallback(async () => {
    const { folder } = await getFolderData();
    const ownerInfo = { ...folder.owner };
    setFolderInfo(folder);
    setOwner(ownerInfo);
    setcards(folder.links);
  }, []);

  const getUserInfo = useCallback(async () => {
    const userInfo = await getUserData();
    setUser(userInfo);
  });

  useEffect(() => {
    getdata();
  }, [getdata]);

  useEffect(() => {
    getUserInfo();
  }, []); //마운트시점에만 호출

  return (
    <div className="App">
      <Nav profileImageSource={user.profileImageSource} email={user.email} />
      <Header folderInfo={folderInfo} owner={owner} />
      <CardList cards={cards} />
      <Footer />
    </div>
  );
}
export default App;
