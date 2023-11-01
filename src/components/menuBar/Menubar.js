import React from "react";

import FolderButton from "../button/FolderButton";
import useUserFolderFetch from "../../hooks/userUserFolderFetch";

export default function Menubar({ data, isLoading }) {
  // ?.의 앞의 평가 대상이 undefined이나 null이 면은 undefined를 반환
  // 못해도 ? undefined
  const result = data?.data;

  //  result가 undefined이면은 obj도 undefined

  const obj =
    (result &&
      result.reduce((acc, item) => {
        if (!acc[item.id]) {
          acc[item.id] = {
            folderId: item.id,
            folderName: item.name,
          };
        }
        return acc;
      }, {})) ||
    {};

  const obj_keys = Object.keys(obj).map(Number);

  return (
    <div>
      <FolderButton data={[obj]} dataKeys={obj_keys} />
    </div>
  );
}
