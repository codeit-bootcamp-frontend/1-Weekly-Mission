import { useState, useEffect } from "react";
import Footer from "./components/js/Footer";
import Header from "./components/js/Header";
import Main from "./components/js/Main";
import { getAccount, getFolder } from "./config/apiurl";

function App() {
  const [account, setAccount] = useState({});
  const [folderOwner, setFolderOwner] = useState({});
  const [folderLinks, setFolderLinks] = useState([]);
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
    <div className="App">
      <Header account={account} />
      <Main
        folderLinks={folderLinks}
        owner={folderOwner}
        folderName={folderName}
      />
      <Footer />
    </div>
  );
}

export default App;
