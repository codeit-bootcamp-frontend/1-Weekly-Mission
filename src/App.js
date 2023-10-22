import "./App.css";
import { CardList } from "./components/CardList";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import getFolderData from "./services/api";
import { useEffect, useState, useCallback } from "react";

function App() {
  const [cards, setcards] = useState([]);
  const [folderInfo, setFolderInfo] = useState({});
  const [owner, setOwner] = useState({});
  const getdata = useCallback(async () => {
    const { folder } = await getFolderData();
    const ownerInfo = { ...folder.owner };
    setFolderInfo(folder);
    setOwner(ownerInfo);
    setcards(folder.links);
  }, []);

  useEffect(() => {
    getdata();
  }, [getdata]);

  return (
    <div className="App">
      <Nav />
      <Header folderInfo={folderInfo} owner={owner} />
      <CardList cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
