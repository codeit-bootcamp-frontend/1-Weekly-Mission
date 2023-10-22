import Card from "./Card.js";
import { useState, useEffect } from "react";
import { getFolderData } from "./api";
import searchImg from "./images/Search.svg";

function CardList() {
  const [hasData, setHasData] = useState(false);
  const [folderData, setFolderData] = useState([]);

  const handleLoad = async () => {
    let result;
    try {
      result = await getFolderData();
      result = result.folder.links;
      setHasData(true);
      setFolderData(result);
    } catch (error) {
      setHasData(false);
      return;
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="cardListContainer">
      <div className="searchContainer">
        <input className="searchInput" placeholder="링크를 검색해 보세요." />
        <img className="searchImg" src={searchImg} alt="검색 이미지" />
      </div>
      <ul className="cardList">
        {folderData.map((item) => (
          <li key={item.id}>
            <Card item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardList;
