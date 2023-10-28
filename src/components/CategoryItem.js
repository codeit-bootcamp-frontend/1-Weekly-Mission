// import { useState, useEffect } from "react";

function CategoryItem({ data, handleClick }) {
  // const [folderId, setFolderId] = useState([]);
  // const [folderName, setFolderName] = useState([]);

  // const folderIdArr = folderInfo.map((item) => item.id);
  // const folderNameArr = folderInfo.map((item) => item.name);

  // useEffect(() => {
  //   setFolderId(folderIdArr);
  //   setFolderName(folderNameArr);
  // }, []);

  // console.log(folderInfo);
  const handleCategoryClick = () => handleClick(data.id);

  return (
    <li onClick={handleCategoryClick}>
      <a>{data.name}</a>
    </li>
  );
}

export default CategoryItem;
