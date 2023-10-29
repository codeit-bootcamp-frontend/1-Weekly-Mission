import { useState } from "react";
import useAsync from "../../../../Hooks/useAsync";
import { getFolders, getLinksByFolderID } from "../../../../api";
import FolderList from "../FolderList/FolderList";

function FolderAndLink() {
  const [data, isLoading, LoadingError, getFolderAsync] = useAsync(() =>
    getFolders(1)
  );

  if (!data) return;

  const { data: folders } = data;

  const handleClick = (folder_id) => (e) => {
    console.log(e.target, folder_id);
  };
  // const handleClick = (e) => {
  //   console.log(e.target);
  // }
  // const [] = useState();
  // const [data, isLoading, LoadingError, getLinkAsync] = useAsync(() =>
  //   getLinksByFolderID(16)
  // );
  return (
    <FolderList folders={folders} onClick={handleClick} />
    // <LinkList></LinkList>)
  );
}

// {
//   folder id = usestate current folder
// --
// 폴더 리스트 ()
// --
// 폴더 내용물 (folder id)
// }

export default FolderAndLink;
