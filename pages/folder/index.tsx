import { GetServerSideProps } from "next";
import { useState } from "react";
import {
  AddBar,
  SearchBar,
  FolderLists,
  NoFolderLink,
  CardSection,
} from "@/components";
import useInfiniteScroll from "@/lib/hooks/useInfiniteScroll";
import { getFolderLists, getLinks } from "@/lib/utils/api";
import { FoldersData, LinksData } from "@/lib/types/data";
import { useScroll } from "@/lib/hooks/useScroll";
import * as Styled from "@/style/StyledFolderPage";

export const getServerSideProps: GetServerSideProps = async () => {
  let folderData;
  let linkData;

  try {
    const [folderLists, links] = await Promise.all([
      getFolderLists(),
      getLinks(),
    ]);
    const { data: FolderData } = folderLists;
    const { data: LinkData } = links;
    folderData = FolderData;
    linkData = LinkData;
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      folderData,
      linkData,
    },
  };
};

interface Props {
  folderData: FoldersData[];
  linkData: LinksData[];
}

const FolderHomepage = ({ folderData, linkData }: Props) => {
  const folderId = "";
  const q = "";
  const [isDisplay, setIsDisplay] = useState(true);

  const target = useInfiniteScroll(setIsDisplay, isDisplay);
  const { scrollY } = useScroll();
  return (
    <>
      <Styled.Header>
        <AddBar isFixed="static" />
      </Styled.Header>
      <Styled.Article>
        <SearchBar id={folderId} />
        <FolderLists
          linksData={linkData}
          folderData={folderData}
          id={folderId}
          q={q}
        />
        {linkData.length === 0 ? (
          <NoFolderLink />
        ) : (
          <CardSection data={linkData} folderData={folderData} />
        )}
        <Styled.TargetDiv ref={target} />
      </Styled.Article>
      {scrollY > 230 && isDisplay && <AddBar isFixed="fixed" />}
    </>
  );
};

export default FolderHomepage;
