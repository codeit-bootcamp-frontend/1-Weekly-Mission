import React from "react";
import FolderButton from "../button/FolderButton";

export default function Menubar({ mappedResult, folderIdKey }) {
  return (
    <div>
      {mappedResult && (
        <FolderButton mappedResult={mappedResult} folderIdKey={folderIdKey} />
      )}
    </div>
  );
}
