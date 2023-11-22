import React from "react";
import FolderButton from "../button/FolderButton";

export default function Menubar({ mappedResult, objKeys, folderId }) {
  return (
    <div>
      {mappedResult && (
        <FolderButton
          mappedResult={mappedResult}
          objKeys={objKeys}
          folderId={folderId}
        />
      )}
    </div>
  );
}
