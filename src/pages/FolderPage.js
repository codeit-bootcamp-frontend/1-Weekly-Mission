import { useEffect, useState } from "react";
import AddLink from "../component/AddLink";
import Cards from "../component/Cards";
import FolderList from "../component/FolderList";
import Search from "../component/Search";
import useAsync from "../hooks/useAsync";
import { getLink } from "../api/getLink";
import { getFolder } from "../api/getFolder";
import style from "./FolderPage.module.css";

function FolderPage() {
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);
  const [, , getLinkAsync] = useAsync(getLink);
  const [, , getFolderAsync] = useAsync(getFolder);

  const handleLoad = async () => {
    const links = await getLinkAsync({ id: 1 });
    setLinks(links);
    const folders = await getFolderAsync({ id: 1 });
    setFolders(folders);
    console.log(folders);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div className={style.root}>
      <AddLink />
      <div className={style.section}>
        <Search />
        <FolderList folders={folders} />
        <Cards cards={links} />
      </div>
    </div>
  );
}

export default FolderPage;
