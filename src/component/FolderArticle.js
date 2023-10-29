import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { folderDataRequestApi } from "../api/requestApi.js";
import { Search } from "./Search.js";
import { Card } from "./Card.js";
import { CardButton } from "./CardButton.js";

export function FolderArticle() {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initQuery = searchParams.get("folder_id");
  const [query, setQuery] = useState(initQuery || "");

  const folderData = async (buttonQuery) => {
    const result = await folderDataRequestApi(`users/1/links${buttonQuery}`);
    setItems(result.data);
    console.log(items);
  };

  const handleButtonClick = async (buttonQuery) => {
    if (!buttonQuery) return;
    const queryNum = await folderData(buttonQuery);
    setQuery(queryNum);
  };

  useEffect(() => {
    folderData();
  }, []);

  return (
    <div className="article">
      <div className="article-section">
        <Search />
        <CardButton onClick={handleButtonClick} query={query} />
        <div className="card-container">
          {items.map((item) => (
            <Card link={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
