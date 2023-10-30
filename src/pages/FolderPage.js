import { useEffect, useState } from "react";
import AddLink from "../component/AddLink";
import Cards from "../component/Cards";
import FolderList from "../component/FolderList";
import Search from "../component/Search";
import useAsync from "../hooks/useAsync";
import { getLink } from "../api/getLink";
import { getFolder } from "../api/getFolder";
import style from "./FolderPage.module.css";
import { useSearchParams } from "react-router-dom";
import CurrentFolder from "../component/CurrentFolder";

function FolderPage() {
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);
  const [, , getLinkAsync] = useAsync(getLink);
  const [, , getFolderAsync] = useAsync(getFolder);
  const [searchParams, setSearchParams] = useSearchParams();
  const folderParam = searchParams.get("folderId");

  const handleFolderLoad = async () => {
    const folders = await getFolderAsync({ id: 1 });
    setFolders([...folders]);
  };
  const handleLinkLoad = async () => {
    const links = await getLinkAsync({
      id: 1,
      folderId: folderParam || "",
    });
    setLinks([...links]);
  };
  useEffect(() => {
    handleLinkLoad();
  }, [folderParam]);

  useEffect(() => {
    handleFolderLoad();
  }, []);
  return (
    <>
      <div className={style.addLink}>
        <AddLink />
      </div>
      <div className={style.root}>
        <div className={style.section}>
          <Search />
          <div className={style.folderSection}>
            <FolderList folders={folders} />
            <CurrentFolder folderId={folderParam} folders={folders} />
            {links.length ? (
              <Cards cards={links} />
            ) : (
              <span className={style.emptyLink}>저장된 링크가 없습니다.</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FolderPage;
