import CardList from "../components/CardList";
import Nav from "../components/Nav";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import getData from "../services/api";
import { useEffect, useState } from "react";

const Shared = () => {
  const [cards, setCards] = useState([]);
  const [folderInfo, setFolderInfo] = useState({});
  const [owner, setOwner] = useState({});

  const getFolderData = async () => {
    const { folder } = await getData("sample/folder");
    const ownerInfo = { ...folder.owner };
    setFolderInfo(folder);
    setOwner(ownerInfo);
    setCards(folder.links);
  };

  useEffect(() => {
    getFolderData();
  }, [getFolderData]);

  return (
    <div className="App">
      <Nav />
      <Header folderInfo={folderInfo} owner={owner} />
      <SearchBar />
      <CardList cards={cards} />
      <Footer />
    </div>
  );
};

export default Shared;
