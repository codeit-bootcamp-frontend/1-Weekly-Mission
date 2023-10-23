// import "./App.css";
import { getUserFolder } from "./utils/api";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [state, setState] = useState([]);
  // const [userInfo, setUserInfo] = useState(null);
  // const [folderInfo, setFolderInfo] = useState(null);

  async function handleList() {
    const { links } = await getUserFolder();
    setState(links);
    // const folderData = await getUserFolder();
    // setFolderInfo(folderData);
    // const userData = await getUserData();
    // setUserInfo(userData);
  }

  useEffect(() => {
    handleList();
  }, []);

  // console.log(state, userInfo, folderInfo);
  return (
    <>
      <Header /*userInfo={userInfo} folderInfo={folderInfo} */ />
      <ul className="cards-list">
        <Search />
        <div className="cards">
          {state.map((cardInfo) => {
            return <Cards cardInfo={cardInfo} key={cardInfo.id} />;
          })}
        </div>
      </ul>
      <Footer />
    </>
  );
}

export default App;
