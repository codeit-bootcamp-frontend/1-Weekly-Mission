import React from "react";

import useFetch from "../../hooks/useFetch";
import FolderButton from "../button/FolderButton";
import useUserFolderFetch from "../../hooks/userUserFolderFetch";

export default function Menubar({ data, isLoading }) {
  // const [data, isLoadng] = useFetch(
  //   "https://bootcamp-api.codeit.kr/api/users/1/folders"
  // );
  // console.log(data?.data);
  // const [data, isLoading] = useUserFolderFetch({ id: 1 });
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
