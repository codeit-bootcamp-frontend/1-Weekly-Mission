import SearchLink from "./SearchLink";
import "./FolderList.css";
import { getUserLinkData } from "../../utils/api.js";
import { useEffect, useState } from "react";
import FolderCategory from "./FolderCategory";
import LinkItem from "./LinkItem";
function FolderList() {
  const [linkData, setLinkData] = useState([]);
  const [folderId, setFolderId] = useState([]);
  const handleLoad = async () => {
    let result;

    try {
      result = await getUserLinkData(folderId ? folderId : "");
      if (!result) return;
      setLinkData(result.data);
      if (result.data.length === 0) {
      }
    } catch (error) {
    } finally {
    }
  };

  const handleChange = (folderId) => {
    setFolderId(folderId);
  };

  useEffect(() => {
    handleLoad();
  }, [folderId]);

  return (
    <div className="folderListContainer">
      <SearchLink />
      <FolderCategory folderId={folderId} handleChange={handleChange} />
      <ul className="linkList">
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
