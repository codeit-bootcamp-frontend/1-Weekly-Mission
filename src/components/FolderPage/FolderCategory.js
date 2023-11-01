import { getUserFolderCategory } from "../../utils/api";
import { useState, useEffect } from "react";
import "./FolderCategory.css";
import folderAddIcon from "../../assets/images/folderAddIcon.png";
import { Link } from "react-router-dom";

function Category({ item, className, onClick, categoryId }) {
  const [isSelected, setIsSelected] = useState(false);
  const { name, id } = item;
  const handleClick = (e) => {
    onClick(item);
    // console.log(categoryId, " :  ", item.id);
    // if (categoryId === item.id) {
    //   setIsSelected(true);
    // } else {
    //   setIsSelected(false);
    // }
  };

  return (
    <li
      className={
        (className = isSelected ? " folderCategory selected" : "folderCategory")
      }
      onClick={handleClick}
    >
      {name}
    </li>
  );
}

function FolderCategory({ folderId, handleChange }) {
  const [folderCategory, setFolderCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  const handleLoad = async () => {
    let result;
    try {
      result = await getUserFolderCategory();
      if (!result) return;
      setFolderCategory(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (item) => {
    const { id, name } = item;
    if (!item) setCategoryId(null);
    setCategoryId(id);
    handleChange(id, name);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="folderCategoryContainer">
      <ul className="folderCategoryList">
        <li
          className={!categoryId ? "folderCategory selected" : "folderCategory"}
          onClick={handleClick}
        >
          전체
        </li>
        {folderCategory &&
          folderCategory.map((item) => (
            <Category
              key={item.id}
              item={item}
              onClick={handleClick}
              categoryId={categoryId}
            />
          ))}
      </ul>
      <div className="folderAdd">
        <Link>폴더추가</Link>
        <img src={folderAddIcon}></img>
      </div>
    </div>
  );
}

export default FolderCategory;
