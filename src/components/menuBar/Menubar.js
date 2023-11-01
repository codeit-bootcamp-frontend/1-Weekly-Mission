import React from "react";

import FolderButton from "../button/FolderButton";
import useUserFolderFetch from "../../hooks/userUserFolderFetch";

export default function Menubar({ obj, objKeys }) {
  return (
    <div>
      <FolderButton data={[obj]} dataKeys={objKeys} />
    </div>
  );
}
