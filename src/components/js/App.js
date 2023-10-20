import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card";
import Search from "./Search";
import { getAccount, getFolder } from "../../Api";

function App() {
  const [account, setAccount] = useState({});
  const [folderOwner, setFolderOwner] = useState({});
  const [folderlinks, setFolderLinks] = useState({});
  const [folderName, setFolderName] = useState("");

  const handleLoad = async () => {
    const nextAccount = await getAccount();
    setAccount(nextAccount);
    const { folder } = await getFolder();
    const { owner, links, name } = folder;
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
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
