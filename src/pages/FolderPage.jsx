import { useState, useEffect, useCallback } from "react";
import { AddBar, SearchBar, FolderLists, CardSection } from "components";
import { getFolderLists, getLinks } from "utils/api";
import * as Styled from "./StyledFolderPage";

const FolderPage = () => {
  const [folderId, setFolderId] = useState("");
  const [headContext, setHeadContext] = useState("전체");
  const [folderListsData, setFolderListsData] = useState({
    data: [],
  });
  const [linksData, setLinksData] = useState({
    data: [],
  });

  const handleFolderLists = useCallback(async (id) => {
    try {
      const [folderLists, links] = await Promise.all([
        getFolderLists(),
        getLinks(id),
      ]);
      const { data: folderData } = folderLists;
      const { data: LinkData } = links;
      setFolderListsData((prevData) => ({
        ...prevData,
        data: folderData,
      }));
      setLinksData((prevData) => ({
        ...prevData,
        data: LinkData,
      }));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    handleFolderLists(folderId);
  }, [folderId, handleFolderLists]);

  const handleButtonClick = (id, name) => {
    setFolderId(id);
    setHeadContext(name);
  };

  return (
    <>
      <Styled.Header>
        <AddBar />
      </Styled.Header>
      <Styled.Article>
        <SearchBar />
        <FolderLists
          folderData={folderListsData.data}
          onClick={handleButtonClick}
          title={headContext}
        />
        <CardSection data={linksData.data} />
      </Styled.Article>
    </>
  );
};

export default FolderPage;
