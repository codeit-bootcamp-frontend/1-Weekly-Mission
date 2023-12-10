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
import {
  formatDate,
  getTimeDiff,
  prettyFormatTimeDiff,
  typeCheckParam,
} from "@/utils/utils";

import styles from "@/assets/styles/sharedPage.module.css";

interface Props {
  userData: UserData;
  folderData: UserFolderData;
  linksListData: LinksData;
}

const SharedPage = ({ userData, folderData, linksListData }: Props) => {
  const [searchData, setSearchData] = useState<LinksData | undefined>(
    linksListData
  );

  return (
    <>
      <Head>
        <title>Shared - LinkBrary</title>
      </Head>
      <nav>
        <NavBar />
      </nav>
      <main className={styles.main}>
        <FolderInfo
          profileImage={userData?.data?.[0]?.image_source}
          userName={userData?.data?.[0]?.name}
          folderName={folderData?.data?.[0]?.name || ""}
        />
        <Search linksListData={linksListData} onChange={setSearchData} />
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SharedPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  const userId = typeCheckParam("string", query.user);
  const folderId = typeCheckParam("string", query.folder);

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
          linksListData: linksResponseData,
        },
      };
    }
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      userData: null,
      folderData: null,
      linksListData: null,
    },
  };
};
