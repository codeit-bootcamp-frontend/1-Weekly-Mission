import Head from "next/head";
import { useState } from "react";
import { GetServerSidePropsContext } from "next";

import FolderInfo from "@/components/FolderInfo/FolderInfo";
import Card from "@/components/Card/Card";
import Search from "@/components/Search/Search";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

import styles from "@/assets/styles/sharedPage.module.css";
import fetcher from "@/lib/axios";
import CardList from "@/components/Card/CardList";

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
          <CardList type="shared" LinksData={searchData} />
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
  const folderId = query.folderId;

  try {
    if (folderId !== undefined) {
      const response = await fetcher<UserFolderData>({
        url: `/folders/${folderId}`,
      });
      const userId = response.data.data[0].user_id;
      const [userDataResponse, userFolderResponse, linksResponse] =
        await Promise.all([
          fetcher<UserData>({ url: `/users/${userId}` }),
          fetcher<UserFolderData>({
            url: `/users/${userId}/folders/${folderId}`,
          }),
          fetcher<LinksData>({
            url: `/users/${userId}/links?folderId=${folderId}`,
          }),
        ]);

      return {
        props: {
          userData: userDataResponse.data,
          folderData: userFolderResponse.data,
          linksListData: linksResponse.data,
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
