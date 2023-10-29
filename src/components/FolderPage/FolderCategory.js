import { getUserFolderCategory } from "../../utils/api";
import { useState, useEffect } from "react";
import "./FolderCategory.css";

function Category({ item, className }) {
  const [isSelect, setIsSelect] = useState(false);
  const { name } = item;

  const handleClick = (e) => {
    if (e.target.className === "folderCategory selected") {
      setIsSelect(false);
    } else {
      setIsSelect(true);
    }
  };

  return (
    <li
      className={(className += isSelect ? " selected" : "")}
      onClick={handleClick}
    >
      {name}
    </li>
  );
}

function FolderCategory() {
  const [folderCategory, setFolderCategory] = useState([]);
  const className = "folderCategory";

  const handleLoad = async () => {
    let result;

    try {
      result = await getUserFolderCategory();
      if (!result) return;
      setFolderCategory(result.data);
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="folderCategoryContainer">
      <ul className="folderCategoryList">
        <li className="folderCategory">전체</li>
        {folderCategory &&
          folderCategory.map((item) => (
            <Category key={item.id} item={item} className={className} />
          ))}
      </ul>
    </div>
  );
}

export default FolderCategory;
