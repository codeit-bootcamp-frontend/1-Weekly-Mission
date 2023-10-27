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

  return (
    <li
      onClick={() => {
        handleClick(data?.id);
      }}
    >
      {/* <a>{folderName[idx]}</a> */}
    </li>
  );
}

export default CategoryItem;
