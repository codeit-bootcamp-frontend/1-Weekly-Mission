import SearchLink from "./SearchLink";
import "./FolderList.css";
import { getUserFolderCategory } from "../../utils/api.js";
import { useEffect, useState } from "react";
import FolderCategory from "./FolderCategory";
function FolderList() {
  const [folerData, setFolderData] = useState({});

  const handleLoad = async () => {
    let result;

    try {
      // result = await getUserFolderCategory();
      console.log(result);
      if (!result) return;
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
    </div>
  );
}

export default FolderList;
