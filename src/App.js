import { useState, useEffect } from "react";
import { getFolder } from "./api";
import "./assets/css/App.css";
import Gnb from "./component/Gnb";
import SearchBar from "./component/SearchBar";
import CardSection from "./component/CardSection";
import Footer from "./component/Footer";

function App() {
  const [folderData, setFolderData] = useState({});

  async function getFolderData() {
    let folderData = {};
    try {
      folderData = await getFolder();
    } catch (err) {
      console.log(err);
    }
    const { id, name, owner, links } = folderData;
    setFolderData({
      id,
      name,
      ownerId: owner["id"],
      ownerName: owner["name"],
      ownerProfile: owner["profileImageSource"],
      links,
    });
  }

  useEffect(() => {
    getFolderData();
  }, []);

  return (
    <div className="body">
      <header className="header">
        <Gnb />
      </header>

      <div className="folderInfo">
        <div className="profileBox">
          <img
            className="profile"
            src={folderData.ownerProfile}
            alt="프로필 이미지"
          />
        </div>
        <p className="ownerName">{`@${folderData.ownerName}`}</p>
        <h1 className="folderName">{folderData.name}</h1>
      </div>

      <section className="section">
        <SearchBar size="large" />
        <CardSection data={folderData.links} />
      </section>

      <Footer className="footer" size="large" />
    </div>
  );
}

export default App;
