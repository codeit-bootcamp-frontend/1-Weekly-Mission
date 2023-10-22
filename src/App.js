import { useEffect, useState } from "react";
import { getUserAccount } from "./APIs/api";
import { CardList } from "./components/Card/CardList";
import GlobalNavBar from "./components/GnB/GnB";
import Footer from "./components/Footer/footer";
import IntroSection from "./components/IntroSection/IntroSection";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

function App() {
  const [userAccount, setUserAccount] = useState({});
  
  const handleLoad = async () => {
    try {
    const { email, profileImageSource } = await getUserAccount();
    setUserAccount({ email, profileImageSource });
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <header>
        <GlobalNavBar userAccount={userAccount} />
        <IntroSection />
      </header>
      <main>
        <SearchBar />
        <CardList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
