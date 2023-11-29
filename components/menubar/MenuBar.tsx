import React from "react";

export default function Menubar({ mappedResult, folderIdKey }) {
  return (
    <div>
      {mappedResult && (
        <FolderButton mappedResult={mappedResult} folderIdKey={folderIdKey} />
      )}
    </div>
  );
}
