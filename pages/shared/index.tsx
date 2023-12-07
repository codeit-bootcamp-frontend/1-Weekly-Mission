import Head from "next/head";
import { useState } from "react";
import { GetServerSidePropsContext } from "next";

import FolderInfo from "@/components/FolderInfo/FolderInfo";
import Card from "@/components/Card/Card";
import Search from "@/components/Search/Search";
import SharedPageCardItem from "@/components/Card/SharedPageCardItem";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

import getUserLinks from "@/api/getUserLinks";
import getUserFolder from "@/api/getUserFolder";
import getUser from "@/api/getUser";
import { formatDate, getTimeDiff, prettyFormatTimeDiff } from "@/utils/utils";

interface Props {
  userData: UserData;
  folderData: UserFolderData;
  linksData: LinksData;
}

const SharedPage = ({ userData, folderData, linksData }: Props) => {
  const [searchData, setSearchData] = useState<LinksData | undefined>(
    linksData
  );

  return (
    <>
      <Head>
        <title>LinkBrary - Shared</title>
      </Head>
      <NavBar />
      <FolderInfo
        profileImage={userData?.data?.[0]?.image_source}
        userName={userData?.data?.[0]?.name}
        folderName={folderData?.data?.[0]?.name || ""}
      />
      <Search linksListData={linksData} onChange={setSearchData} />
      <Card>
        {searchData?.data &&
          searchData.data.map((link: Link) => {
            const { id, created_at, url, title, description, image_source } =
              link;
            const formattedCreatedAt = formatDate(created_at);
            const timeDiff = getTimeDiff(created_at);
            const formatTimeDiff = prettyFormatTimeDiff(timeDiff);
            return (
              <SharedPageCardItem
                key={id}
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
      <Footer />
    </>
  );
};

export default SharedPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // Fetch data from API or other sources using context.query
  const { query } = context;
  const userId = typeof query.user === "string" ? +query.user : undefined;
  const folderId = typeof query.folder === "string" ? +query.folder : undefined;

  try {
    if (userId !== undefined && folderId !== undefined) {
      const [userDataResponseData, userFolderResponseData, linksResponseData] =
        await Promise.all([
          getUser({ userId }),
          getUserFolder({ userId, folderId }),
          getUserLinks({ userId, folderId }),
        ]);

      return {
        props: {
          userData: userDataResponseData,
          folderData: userFolderResponseData,
          linksData: linksResponseData,
        },
      };
    }
  } catch (e) {
    // Handle errors if necessary
    console.log(e);
  }

  // Return empty props or handle errors if necessary
  return {
    props: {
      userData: null,
      folderData: null,
      linksData: null,
    },
  };
};
