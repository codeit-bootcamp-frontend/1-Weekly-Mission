import { GetServerSideProps } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
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
import { useLogin } from "@/lib/utils/AuthContext";
import * as Styled from "@/style/FolderPage.styled";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id: folderId } = context.params as Params;

  let folderData;
  let linkData;

  try {
    const [folderLists, links] = await Promise.all([
      getFolderLists(),
      getLinks(folderId),
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
      folderId,
    },
  };
};

interface Props {
  folderData: FoldersData[];
  linkData: LinksData[];
  folderId: string;
}

const FolderPage = ({ folderData, linkData, folderId }: Props) => {
  const q = "";
  const [isDisplay, setIsDisplay] = useState(true);

  const target = useInfiniteScroll(setIsDisplay, isDisplay);
  const { scrollY } = useScroll();

  useLogin(true);

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

export default FolderPage;
