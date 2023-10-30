import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import {
  AddBar,
  SearchBar,
  FolderLists,
  CardSection,
  NoFolderLink,
} from "components";
import { getFolderLists, getLinks } from "utils/api";
import * as Styled from "./StyledFolderPage";

const FolderPage = () => {
  const { folderId } = useParams();
  const [folderListsData, setFolderListsData] = useState({
    data: [],
  });
  const [linksData, setLinksData] = useState({
    data: [],
  });

  const { setSticky } = useOutletContext();

  const handleFolderLists = async (id) => {
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
  };

  useEffect(() => {
    setSticky("static");
    handleFolderLists(folderId);
  }, [folderId]);

  return (
    <>
      <Styled.Header>
        <AddBar />
      </Styled.Header>
      <Styled.Article>
        <SearchBar />
        {linksData.data.length === 0 ? (
          <NoFolderLink />
        ) : (
          <>
            <FolderLists folderData={folderListsData.data} />
            <CardSection data={linksData.data} />
          </>
        )}
      </Styled.Article>
    </>
  );
};

export default FolderPage;
