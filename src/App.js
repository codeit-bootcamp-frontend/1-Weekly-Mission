import "./App.css";
import { useEffect, useState } from "react";
import { getAccount, getFolder } from "./utils/api";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [account, setAccount] = useState({});
  const [personalfolder, setPersonalfolder] = useState({});

  const handleLoad = async () => {
    const { name, email, profileImageSource } = await getAccount();
    setAccount({ name, email, profileImageSource });

    const {
      folder: { links, name: title },
    } = await getFolder();
    setPersonalfolder({ links, title });
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <>
      <Header account={account} />
      <Main account={account} personalfolder={personalfolder} />
      <Footer />
    </>
  );
}

export default App;
