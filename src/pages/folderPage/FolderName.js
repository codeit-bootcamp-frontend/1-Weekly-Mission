import React from "react";

const FolderName = ({ data }) => {
  const { name } = data;

  return (
    <button
      style={{
        width: "6rem",
      }}
    >
      {name}
    </button>
  );
};

export default FolderName;
