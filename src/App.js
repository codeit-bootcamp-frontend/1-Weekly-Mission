import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getFolderData, getUserData } from "./services/api";
import { useEffect, useState, useCallback } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [folderInfo, setFolderInfo] = useState({});
  const [owner, setOwner] = useState({});

  const getData = useCallback(async () => {
    const { folder } = await getFolderData();
    const ownerInfo = { ...folder.owner };
    setFolderInfo(folder);
    setOwner(ownerInfo);
    setCards(folder.links);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="App">
      <Nav />
      <Header folderInfo={folderInfo} owner={owner} />
      <Main cards={cards} />
      <Footer />
    </div>
  );
}
export default App;
