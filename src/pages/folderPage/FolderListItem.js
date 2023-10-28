import React, { useEffect } from "react";
import { requestSingleFolderApi } from "../../api/singleFolderApi";

const FolderListItem = ({ data, handleFolderClick }) => {
  const { id, name } = data;

  // const getSingleFolderData = async () => {
  //   const temp = await requestSingleFolderApi(singleFolderDataId);
  //   setSingleFolderData(temp);
  // };
  // function handleFolderClick() {
  //   setSingleFolderDataId(id);
  //   getSingleFolderData();
  // }

  return (
    <button
      className="folder-list-button"
      onClick={() => {
        handleFolderClick(id);
      }}
    >
      {name}
    </button>
  );
};

export default FolderListItem;
