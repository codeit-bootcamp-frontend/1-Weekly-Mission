import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Navigate, useLocation } from "react-router-dom";
import { getFolderLinks, getFolders } from "../api";
import Gnb from "../component/Gnb";
import SearchBar from "../component/SearchBar";
import FolderList from "../component/FolderList";
import CardSection from "../component/CardSection";
import AddLinkBar from "../component/AddLinkBar";
import "../assets/css/FolderPage.css";
import * as Styled from "../style/EmptyDiv";

function FolderPage() {
  const { folderId } = useParams();
  const folderParam = folderId || "";
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);

  /* 
  const location = useLocation();

  if (location.pathname === "/folder/") {
    window.location = "/folder";
  }
  */

  async function getFolderList() {
    const folders = await getFolders();
    setFolders(folders);
  }

  async function getFolderLink(id) {
    const links = await getFolderLinks(id);
    setLinks(links);
  }

  const message = links ? (
    "저장된 링크가 없습니다📭"
  ) : (
    <Navigate to="/NotFoundPage" />
  );

  useEffect(() => {
    getFolderLink(folderParam);
    getFolderList();
  }, [folderParam]);

  return (
    <>
      <Helmet>
        <title>Folder</title>
      </Helmet>
      <Gnb isFixed={true} />
      <div className="folderInfo">
        <AddLinkBar />
      </div>
      <section className="section">
        <SearchBar size="large" />
        {links && links.length !== 0 ? (
          <>
            <FolderList folders={folders} params={folderParam} />
            <div>제목</div>
            <CardSection data={links} />
          </>
        ) : (
          <Styled.EmptyDiv> {message} </Styled.EmptyDiv>
        )}
      </section>
    </>
  );
}

export default FolderPage;
