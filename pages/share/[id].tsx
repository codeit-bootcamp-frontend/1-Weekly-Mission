import { GetServerSideProps } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useFetchShareData } from "@/lib/utils/api";
import { CardSection, FolderInfo, SearchBar } from "@/components";
import * as Styled from "@/style/SharePage.styled";

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

const SharePage = ({ folderId }: Props) => {
  const { folderInfo, linkInfo } = useFetchShareData(folderId, 1);

  if (!folderInfo.data.length && !linkInfo.data.length) {
    return null;
  }

  return (
    <>
      <Styled.Header>
        <FolderInfo folderName={folderInfo.data[0]["name"]} />
      </Styled.Header>
      <Styled.Article>
        <SearchBar id={folderId} q="" />
        <CardSection folderData={[]} data={linkInfo.data} />
      </Styled.Article>
    </>
  );
};

export default SharePage;
