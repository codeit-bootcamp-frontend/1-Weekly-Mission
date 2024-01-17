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
  userData: User[];
  folderData: UserFolder[];
  linksListData: FolderLink[];
}

const SharedPage = ({ userData, folderData, linksListData }: Props) => {
  const [searchData, setSearchData] = useState<FolderLink[] | undefined>(
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
          profileImage={userData?.[0]?.image_source}
          userName={userData?.[0]?.name}
          folderName={folderData?.[0]?.name || ""}
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
      const folderResponse = await fetcher<UserFolder[]>({
        url: `/folders/${folderId}`,
      });
      const userId = folderResponse.data[0].user_id;
      const [userDataResponse, linksResponse] = await Promise.all([
        fetcher<User[]>({ url: `/users/${userId}` }),
        fetcher<FolderLink[]>({
          url: `/folders/${folderId}/links`,
        }),
      ]);

      return {
        props: {
          userData: userDataResponse.data,
          folderData: folderResponse.data,
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
