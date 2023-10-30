import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import { getFolderLinks, getFolders } from "../api";
import Gnb from "../component/Gnb";
import SearchBar from "../component/SearchBar";
import FolderList from "../component/FolderList";
import CardSection from "../component/CardSection";
import "../assets/css/FolderPage.css";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 66.25rem;
  height: 6.25rem;
  line-height: 1.5rem;
`;

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
        <p>링크를 추가해 보세요</p>
      </div>
      <section className="section">
        <SearchBar size="large" />
        {links && links.length !== 0 ? (
          <>
            <FolderList folders={folders} />
            <div>제목</div>
            <CardSection data={links} />
          </>
        ) : (
          <StyledDiv> {message} </StyledDiv>
        )}
      </section>
    </>
  );
}

export default FolderPage;
