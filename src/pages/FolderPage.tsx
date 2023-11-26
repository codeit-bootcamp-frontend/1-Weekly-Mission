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

type setSticky = (value: string) => void;

interface UseOutletContext {
  setSticky: setSticky;
  isLogin: boolean;
}

interface LinksData {
  id?: number;
  created_at?: string;
  updated_at?: string | null;
  url?: string;
  title?: string;
  description?: string;
  image_source?: string;
  folder_id?: number;
}

interface Links {
  data: LinksData[];
}

interface LinkCount {
  count: number;
}

interface FoldersData {
  id?: number;
  created_at?: string;
  name: string;
  user_id?: number;
  link: LinkCount;
}

interface Folders {
  data: FoldersData[];
}

const FolderPage = () => {
  const { folderId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isDisplay, setIsDisplay] = useState(true);
  const [folderListsData, setFolderListsData] = useState<Folders>({
    data: [],
  });
  const [linksData, setLinksData] = useState<Links>({
    data: [],
  });
  const [originalLinksData, setOriginalLinksData] = useState<Links>({
    data: [],
  });

  const { setSticky, isLogin } = useOutletContext<UseOutletContext>();
  const { scrollY } = useScroll();

  const handleFolderLists = async (id: string | undefined) => {
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
          originalLinksData={originalLinksData.data}
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
      {isLoading && <ModalLoading back="back" />}
    </>
  );
};

export default FolderPage;
