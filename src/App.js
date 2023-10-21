import { useEffect, useState } from "react";
import { getFolderData, getUserInfos } from "./APIs/api";
import { CardList } from "./components/Card/CardList";
import GlobalNavBar from "./components/GnB/GnB";
import Footer from "./components/Footer/footer";
import IntroSection from "./components/IntroSection/IntroSection";
import SearchBar from "./components/SearchBar/SearchBar";
import './App.css'

function App() {

  const [userInfos, setUserInfos] = useState([])
  
  const getUserInfos = async() => {
    const result = await getFolderData()
    const {folder} = result
    setUserInfos(folder)
  }

  useEffect(() => {
    getUserInfos()
  }, [])

  return (
    <div>
      <GlobalNavBar />
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
