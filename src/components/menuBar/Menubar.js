import React from "react";
import FolderButton from "../button/FolderButton";

export default function Menubar({ obj, objKeys, folderId }) {
  return (
    <div>
      <FolderButton data={[obj]} dataKeys={objKeys} folderId={folderId} />
    </div>
  );
}
