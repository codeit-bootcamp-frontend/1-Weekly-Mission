import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { getSample } from "../api";
import Gnb from "../component/Gnb";
import SearchBar from "../component/SearchBar";
import CardSection from "../component/CardSection";
import "../assets/css/FolderPage.css";

function SharedPage() {
  const [folderData, setFolderData] = useState({});

  async function getFolderData() {
    let folderData = {};
    try {
      folderData = await getSample();
      const { id, name, owner, links } = folderData;
      setFolderData({
        id,
        name,
        ownerId: owner["id"],
        ownerName: owner["name"],
        ownerProfile: owner["profileImageSource"],
        links,
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getFolderData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Shared</title>
      </Helmet>
      <Gnb />
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
    </>
  );
}

export default SharedPage;
