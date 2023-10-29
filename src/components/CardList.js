import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSampleData } from "../api.js";
import Card from "./Card.js";

function CardList() {
  const [hasData, setHasData] = useState(false);
  const [folderData, setFolderData] = useState([]);

  const handleLoad = async () => {
    let result;
    try {
      result = await getSampleData();
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
