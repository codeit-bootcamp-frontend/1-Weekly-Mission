import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useState, useEffect } from "react";
import {
  AddBar,
  SearchBar,
  FolderLists,
  NoFolderLink,
  CardSection,
  SearchResult,
} from "@/components";
import useInfiniteScroll from "@/lib/hooks/useInfiniteScroll";
import { getFolderLists, getLinks } from "@/lib/utils/api";
import { FoldersData, LinksData } from "@/lib/types/data";
import { useLogin } from "@/lib/utils/LoginContext";
import { useScroll } from "@/lib/hooks/useScroll";
import * as Styled from "@/style/FolderPage.styled";

export const getServerSideProps: GetServerSideProps = async (context) => {
  let folderId = "";
  if (context.params) {
    const { id } = context.params as Params;
    folderId = id;
  }
  const { q } = context.query;

  let folderData;
  let linkData;

  try {
    const [folderLists, links] = await Promise.all([
      getFolderLists(),
      getLinks(folderId),
    ]);
    const { data: FolderData } = folderLists;
    const { data: LinkData } = links;
    const filteredLinkData = LinkData.filter((item: LinksData) => {
      if (
        item["description"]?.includes(q as string) ||
        item["url"]?.includes(q as string) ||
        item["title"]?.includes(q as string)
      ) {
        return true;
      } else {
        return false;
      }
    });
    folderData = FolderData;
    linkData = filteredLinkData;
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
      q,
    },
  };
};

interface Props {
  folderData: FoldersData[];
  linkData: LinksData[];
  folderId: string;
  q: string;
}

const FolderSearchPage = ({ folderData, linkData, folderId, q }: Props) => {
  const [isDisplay, setIsDisplay] = useState(true);

  const { isLogin } = useLogin();
  const router = useRouter();
  const target = useInfiniteScroll(setIsDisplay, isDisplay);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!isLogin) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Styled.Header>
        <AddBar isFixed="static" />
      </Styled.Header>
      <Styled.Article>
        <SearchBar id={folderId} q={q} />
        {q && <SearchResult>{q}</SearchResult>}
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

export default FolderSearchPage;
