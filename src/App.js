import { useEffect, useState } from "react";
import { getUserAccount, getFolderData } from "./APIs/api";
import { CardList } from "./components/Card/CardList";
import GlobalNavBar from "./components/GnB/GnB";
import Footer from "./components/Footer/footer";
import IntroSection from "./components/IntroSection/IntroSection";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

function App() {
  
  const [account, setAccount] = useState('')
  
  const handleLoad = async () => {
    const userAccount = await getUserAccount()
    setAccount(userAccount)
  } 

  useEffect(() => {
    handleLoad()
  },[])



  return (
    <div>
      <GlobalNavBar email={account.email} profileImageSource={account.profileImageSource} />
      <IntroSection />
      <main>
        <SearchBar />
        <CardList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
