import "./App.css";
import { Main } from "./components/Main";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getFolderData, getUserData } from "./services/api";
import { useEffect, useState, useCallback } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [folderInfo, setFolderInfo] = useState({});
  const [owner, setOwner] = useState({});
  const [user, setUser] = useState([]);

  const getData = useCallback(async () => {
    const { folder } = await getFolderData();
    const ownerInfo = { ...folder.owner };
    setFolderInfo(folder);
    setOwner(ownerInfo);
    setCards(folder.links);
  }, []);

  const getUserInfo = useCallback(async () => {
    const userInfo = await getUserData();
    setUser(userInfo);
  });

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    getUserInfo();
  }, []); //마운트시점에만 호출

  return (
    <div className="App">
      <Nav user={user} />
      <Header folderInfo={folderInfo} owner={owner} />
      <Main cards={cards} />
      <Footer />
    </div>
  );
}
export default App;
