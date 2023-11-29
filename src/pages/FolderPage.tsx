import { useEffect, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getFolderLinks, getFolders } from "../api";
import useScrollEvent from "../hooks/useScrollEvent";
import Gnb from "../component/Gnb";
import AddLinkBar from "../component/AddLinkBar";
import CardContainer from "../component/CardContainer";
import * as Styled from "../style/FolderPage";

function FolderPage() {
  const { folderId } = useParams();
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);
  const folderParam = folderId || "";
  const { ref, isTrue } = useScrollEvent([folderParam]);

  async function getFolderList() {
    const folders = await getFolders();
    setFolders(folders);
  }

  async function getFolderLink(id: string | number) {
    const links = await getFolderLinks(id);
    setLinks(links);
  }

  // const intersectFooter = useCallback(() => {
  //   const footer = document.getElementById("footer");
  // }, []);

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
      <Styled.Div>
        <AddLinkBar ref={ref} />
      </Styled.Div>
      <CardContainer folders={folders} data={links} params={folderParam} />
      {!isTrue && <AddLinkBar float={true} />}
    </>
  );
}

export default FolderPage;
