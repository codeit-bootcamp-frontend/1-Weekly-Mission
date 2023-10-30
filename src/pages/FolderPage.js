import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { getFolderLinks, getFolders } from "../api";
import SearchBar from "../component/SearchBar";
import CardSection from "../component/CardSection";
import "../assets/css/SharedPage.css";
import FolderList from "../component/FolderList";

function FolderPage() {
  const { folderId } = useParams();
  const folderParam = folderId || "";
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);

  async function getFolderList() {
    const folders = await getFolders();
    setFolders(folders);
  }

  async function getFolderLink(id) {
    const links = await getFolderLinks(id);
    setLinks(links);
  }

  useEffect(() => {
    getFolderLink(folderId);
    getFolderList();
  }, [folderId]);

  return (
    <>
      <Helmet>
        <title>Folder</title>
      </Helmet>
      <div className="folderInfo">
        <p>링크를 추가해 보세요</p>
      </div>

      <section className="section">
        <SearchBar size="large" />
        <FolderList folders={folders} />
        {links && links.length === 0 ? (
          <h1> 저장된 링크가 없습니다. </h1>
        ) : (
          <CardSection data={links} />
        )}
      </section>
    </>
  );
}

export default FolderPage;
