import { getFolderAccount } from "../api";
import { CardList } from './CardList';
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import './global.css';

function App() {
  const [account, setAccount] = useState({});

  const handleLoad = async () => {
    const { email, profileImageSource } = await getFolderAccount();
    setAccount({ email, profileImageSource });
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <Header account={account} />
      <div>
        <CardList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
