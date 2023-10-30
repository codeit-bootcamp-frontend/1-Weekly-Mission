import SearchLink from "./SearchLink";
import "./FolderList.css";
import { getUserLinkData } from "../../utils/api.js";
import { useEffect, useState } from "react";
import FolderCategory from "./FolderCategory";
import LinkItem from "./LinkItem";
function FolderList() {
  const [linkData, setLinkData] = useState([]);

  const handleLoad = async () => {
    let result;

    try {
      result = await getUserLinkData();
      if (!result) return;
      setLinkData(result.data);
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="folderListContainer">
      <SearchLink />
      <FolderCategory />
      <ul className="LinkList">
        {linkData.map((item) => (
          <li key={item.id}>
            <LinkItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FolderList;
