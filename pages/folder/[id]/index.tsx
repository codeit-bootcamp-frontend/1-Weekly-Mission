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
import { useScroll } from "@/lib/hooks/useScroll";
import { useLogin } from "@/lib/utils/AuthContext";
import { useFetchFolderData } from "@/lib/utils/api";
import * as Styled from "@/style/FolderPage.styled";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id: folderId } = context.params as Params;

  return {
    props: {
      folderId,
    },
  };
};

interface Props {
  folderId: string;
}

const FolderPage = ({ folderId }: Props) => {
  const q = "";

  const [isDisplay, setIsDisplay] = useState(true);
  const target = useInfiniteScroll(setIsDisplay, isDisplay);
  const { scrollY } = useScroll();
  const { folderData, linkData } = useFetchFolderData(folderId);

  useLogin(true);

  if (!folderData.data.length && !linkData.data.length) {
    return null;
  }

  return (
    <>
      <Styled.Header>
        <AddBar isFixed="static" />
      </Styled.Header>
      <Styled.Article>
        <SearchBar id={folderId} />
        <FolderLists
          linksData={linkData.data}
          folderData={folderData.data}
          id={folderId}
          q={q}
        />
        {linkData.data.length === 0 ? (
          <NoFolderLink />
        ) : (
          <CardSection data={linkData.data} folderData={folderData.data} />
        )}
        <Styled.TargetDiv ref={target} />
      </Styled.Article>
      {scrollY > 230 && isDisplay && <AddBar isFixed="fixed" />}
    </>
  );
};

export default FolderPage;
