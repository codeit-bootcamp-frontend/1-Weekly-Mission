import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CardList from "./CardList";
import Search from "./Search";
import { getAccount, getFolder } from "../../Api";

function App() {
  const [account, setAccount] = useState({});
  const [folderOwner, setFolderOwner] = useState({});
  const [folderLinks, setFolderLinks] = useState({});
  const [folderName, setFolderName] = useState("");

  const handleLoad = async () => {
    const nextAccount = await getAccount();
    setAccount(nextAccount);
    const folderResult = await getFolder();
    const {
      folder: { owner, links, name },
    } = folderResult;
    setFolderOwner(owner);
    setFolderLinks(links);
    setFolderName(name);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <Header account={account} owner={folderOwner} folderName={folderName} />
      <div>
        <Search />
        <CardList folderLinks={folderLinks} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
