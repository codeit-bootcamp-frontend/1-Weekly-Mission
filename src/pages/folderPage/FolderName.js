import React from "react";

const FolderName = ({ data }) => {
  const { name } = data;

  return <button className="folder-list-button">{name}</button>;
};

export default FolderName;
