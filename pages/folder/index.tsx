import { createContext, useEffect, useState } from "react";
import AddLink from "@/src/components/AddLink/AddLink";
import FolderPageCards from "@/src/components/Cards/FolderPageCards";
import FolderList from "@/src/components/FolderList/FolderList";
import Search from "@/src/components/Search/Search";
// import useAsync from "../hooks/useAsync";
import { Nav, Footer } from "@/src/containers";
import { Link, getLink } from "@/src/api/getLink";
import { Folder, getFolder } from "@/src/api/getFolder";
import style from "./folder.module.css";
import { useSearchParams } from "next/navigation";
import CurrentFolder from "@/src/components/CurrentFolder/CurrentFolder";

export const FolderPageContext = createContext<Folder[]>([]);

function FolderPage() {
  const [links, setLinks] = useState<Link[]>([]);
  const [folders, setFolders] = useState<Folder[]>([]);
  // const { wrappedFunction:getLinkAsync} = useAsync(getLink);
  // const {wrappedFunction:getFolderAsync} = useAsync(getFolder);
  const searchParams = useSearchParams();
  const folderParam = searchParams.get("folderId");

  useEffect(() => {
    const handleLinkLoad = async () => {
      const links = await getLink({
        id: 1,
        folderId: folderParam || "",
      });
      setLinks([...links]);
    };
    handleLinkLoad();
  }, [folderParam]);

  useEffect(() => {
    const handleFolderLoad = async () => {
      const folders = await getFolder({ id: 1 });
      setFolders([...folders]);
    };
    handleFolderLoad();
  }, []);
  return (
    <>
      <Nav />
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
      <Footer />
    </>
  );
}

export default FolderPage;
