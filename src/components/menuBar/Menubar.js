import React from "react";

import useFetch from "../../hooks/useFetch";
import FolderButton from "../button/FolderButton";

export default function Menubar() {
  const [data, isLoaidng] = useFetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );
  const result = data?.data;
  const obj = {};
  let obj_keys = [];

  result &&
    result.forEach((item) => {
      obj[item.id] = {
        folderId: item.id,
        folderName: item.name,
      };
      obj_keys.push(item.id);
    });

  return (
    <div>
      <FolderButton data={[obj]} dataKeys={obj_keys} />
    </div>
  );
}
