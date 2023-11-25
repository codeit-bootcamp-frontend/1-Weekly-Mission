import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import {
  AddBar,
  SearchBar,
  FolderLists,
  CardSection,
  NoFolderLink,
  ModalLoading,
} from "components";
import { getFolderLists, getLinks } from "utils/api";
import { useScroll } from "hooks/useScroll";
import useInfiniteScroll from "hooks/useInfiniteScroll";
import * as Styled from "./StyledFolderPage";

const FolderPage = () => {
  const { folderId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isDisplay, setIsDisplay] = useState(true);
  const [folderListsData, setFolderListsData] = useState({
    data: [],
  });
  const [linksData, setLinksData] = useState({
    data: [],
  });
  const [originalLinksData, setOriginalLinksData] = useState({
    data: [],
  });

  const { setSticky, isLogin } = useOutletContext();
  const { scrollY } = useScroll();

  const handleFolderLists = async (id) => {
    setIsLoading(true);
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
      setOriginalLinksData((prevData) => ({
        ...prevData,
        data: LinkData,
      }));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const target = useInfiniteScroll(setIsDisplay, isDisplay);

  useEffect(() => {
    setSticky("static");
    if (isLogin) {
      handleFolderLists(folderId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId, isLogin]);

  return (
    <>
      <Styled.Header>
        <AddBar isFixed="static" />
      </Styled.Header>
      <Styled.Article>
        <SearchBar
          linksData={linksData.data}
          setLinksData={setLinksData}
          originalLinksData={originalLinksData}
        />
        <FolderLists
          linksData={linksData.data}
          folderData={folderListsData.data}
          id={folderId}
        />
        {linksData.data.length === 0 ? (
          <NoFolderLink />
        ) : (
          <CardSection
            data={linksData.data}
            folderData={folderListsData.data}
          />
        )}
        <Styled.TargetDiv ref={target} />
      </Styled.Article>
      {scrollY > 230 && isDisplay && <AddBar isFixed="fixed" />}
      {isLoading && <ModalLoading />}
    </>
  );
};

export default FolderPage;
