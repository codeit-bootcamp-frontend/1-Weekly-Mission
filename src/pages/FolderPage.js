import { createContext, useEffect, useState } from "react";
import AddLink from "../component/AddLink";
import FolderPageCards from "../component/FolderPageCards";
import FolderList from "../component/FolderList";
import Search from "../component/Search";
import useAsync from "../hooks/useAsync";
import { getLink } from "../api/getLink";
import { getFolder } from "../api/getFolder";
import style from "./FolderPage.module.css";
import { useSearchParams } from "react-router-dom";
import CurrentFolder from "../component/CurrentFolder";
export const FolderPageContext = createContext();
function FolderPage() {
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);
  const [, , getLinkAsync] = useAsync(getLink);
  const [, , getFolderAsync] = useAsync(getFolder);
  const [searchParams, setSearchParams] = useSearchParams();
  const folderParam = searchParams.get("folderId");

  useEffect(() => {
    const handleLinkLoad = async () => {
      const links = await getLinkAsync({
        id: 1,
        folderId: folderParam || "",
      });
      setLinks([...links]);
    };
    handleLinkLoad();
  }, [folderParam]);

  useEffect(() => {
    const handleFolderLoad = async () => {
      const folders = await getFolderAsync({ id: 1 });
      setFolders([...folders]);
    };
    handleFolderLoad();
  }, []);
  return (
    <>
      <div className={style.addLink}>
        <AddLink folders={folders} />
      </div>
      <div className={style.root}>
        <div className={style.section}>
          <Search />
          <div className={style.folderSection}>
            <FolderList folders={folders} />
            <CurrentFolder folderId={folderParam} folders={folders} />
            <FolderPageContext.Provider value={folders}>
              {links.length ? (
                <FolderPageCards cards={links} />
              ) : (
                <span className={style.emptyLink}>저장된 링크가 없습니다.</span>
              )}
            </FolderPageContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}

export default FolderPage;
