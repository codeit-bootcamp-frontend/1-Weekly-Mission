// import "./App.css";
import { getUserData, getUserFolder } from "./utils/api";
import { useEffect, useState } from "react";
import CardComponent from "./components/CardComponent";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [state, setState] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [folderInfo, setFolderInfo] = useState(null);

  async function handleList() {
    const { links } = await getUserFolder();
    setState(links);
    const folderData = await getUserFolder();
    setFolderInfo(folderData);
    const userData = await getUserData();
    // console.log(userData);
    setUserInfo(userData);
  }

  useEffect(() => {
    handleList();
  }, []);

  // console.log(state, userInfo, folderInfo);
  return (
    <>
      <Header userInfo={userInfo} folderInfo={folderInfo} />
      <ul className="cards-list">
        <Search />
        <div className="cards">
          {state.map((cardInfo) => {
            return <CardComponent cardInfo={cardInfo} key={cardInfo.id} />;
          })}
        </div>
      </ul>
      <Footer />
    </>
  );
}

export default App;
