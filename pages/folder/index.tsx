import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import Head from "next/head";

import AddLink from "@/components/AddLink/AddLink";
import FolderUtils from "@/components/FolderUtils/FolderUtils";
import Search from "@/components/Search/Search";
import Category from "@/components/Category/Category";
import Card from "@/components/Card/Card";
import FolderPageCardItem from "@/components/Card/FolderPageCardItem";
import NotFoundLink from "@/components/Card/NotFoundLink";
import AddLinkModalContent from "@/components/Modal/AddLinkModalContent/AddLinkModalContent";
import AddLinkInput from "@/components/AddLink/AddLinkInput";
import CategoryList from "@/components/Category/CategoryList";
import AddFolderButton from "@/components/AddFolderButton/AddFolderButton";
import AddFolderModalContent from "@/components/Modal/AddFolderModalContent/AddFolderModalContent";
import AddLinkButton from "@/components/AddLink/AddLinkButton";
import CurrentFolder from "@/components/FolderUtils/CurrentFolder";
import FolderEdit from "@/components/FolderUtils/FolderEdit";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

import getUserFolders from "@/api/getUserFolders";
import getUserLinks from "@/api/getUserLinks";
import { formatDate, getTimeDiff, prettyFormatTimeDiff } from "@/utils/utils";

interface Props {
  folderListData: UserFolderData;
  linksListData: LinksData;
}

const FolderPage = ({ folderListData, linksListData }: Props) => {
  const [currentFolderName, setCurrentFolderName] = useState("전체");
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState<LinksData | undefined>(
    linksListData
  );

  return (
    <>
      <Head>
        <title>LinkBrary - Folder</title>
      </Head>
      <NavBar />
      <AddLink>
        <AddLinkInput inputValue={inputValue} onChange={setInputValue}>
          <AddLinkButton inputValue={inputValue}>
            <AddLinkModalContent
              inputValue={inputValue}
              folderListData={folderListData}
            />
          </AddLinkButton>
        </AddLinkInput>
      </AddLink>
      <Search linksListData={linksListData} onChange={setSearchData} />
      <Category>
        <CategoryList
          folderListData={folderListData}
          currentFolder={setCurrentFolderName}
        >
          <AddFolderButton>
            <AddFolderModalContent />
          </AddFolderButton>
        </CategoryList>
      </Category>
      <FolderUtils>
        <CurrentFolder>{currentFolderName}</CurrentFolder>
        {currentFolderName !== "전체" && (
          <FolderEdit currentFolderName={currentFolderName} />
        )}
      </FolderUtils>
      <Card>
        {searchData?.data &&
          searchData.data.map((link) => {
            const { created_at, url, title, description, image_source } = link;
            const formattedCreatedAt = formatDate(created_at);
            const timeDiff = getTimeDiff(created_at);
            const formatTimeDiff = prettyFormatTimeDiff(timeDiff);

            return (
              <FolderPageCardItem
                key={url}
                folderListData={folderListData}
                formatTimeDiff={formatTimeDiff}
                formattedCreatedAt={formattedCreatedAt}
                url={url}
                title={title}
                description={description}
                imageSource={image_source}
              />
            );
          })}
      </Card>
      {searchData?.data?.length === 0 ? <NotFoundLink /> : undefined}
      <Footer />
    </>
  );
};

export default FolderPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  const userId = typeof query.user === "string" ? +query.user : undefined;
  const folderId = typeof query.folder === "string" ? +query.folder : undefined;
  try {
    if (userId !== undefined && folderId !== undefined) {
      const [folderListResponseData, linksListResponseData] = await Promise.all(
        [getUserFolders({ userId }), getUserLinks({ userId, folderId })]
      );

      return {
        props: {
          folderListData: folderListResponseData,
          linksListData: linksListResponseData,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      folderListData: null,
      linksListData: null,
    },
  };
};
