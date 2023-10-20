import Card from "../../components/card/Card";
import "./folder.css";
import SearchImg from "../../assets/folder/img_search.png";
import axios from "axios";
import { useEffect, useState } from "react";

const Folder = () => {
  const [cardData, setCardData] = useState([]);
  const [user, setUser] = useState();
  const [name, setName] = useState("");

  const handleFolder = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/sample/folder`
      );
      if (response.status === 200) {
        const result = response.data.folder;
        setCardData(result.links);
        setUser(result.owner);
        setName(result.name);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handleFolder();
  }, []);

  return (
    <div className="wrapper">
      <div className="section">
        <div className="folderContentContainer">
          <img
            id="userProfile"
            src={user?.profileImageSource}
            alt="profileImg"
          />
          <div id="userName">{user?.name}</div>
          <div id="folderName">{name}</div>
        </div>
      </div>
      <div className="section" style={{ background: "#fff" }}>
        <div className="folderContentContainer" id="bottomContainer">
          <div className="searchInputContainer">
            <img src={SearchImg} alt="searchImg" id="searchImg" />
            <input
              id="searchContainer"
              placeholder="링크를 검색해보세요."
            ></input>
          </div>
          <div id="cardContainer">
            {cardData?.map((e) => {
              return (
                <Card
                  key={e.id}
                  url={e.url}
                  src={e.imageSource}
                  content={e.description}
                  createdAt={e.createdAt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
