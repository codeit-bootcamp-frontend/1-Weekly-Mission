import Head from "next/head";
import { useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next";

import FolderInfo from "@/components/FolderInfo/FolderInfo";
import Card from "@/components/Card/Card";
import Search from "@/components/Search/Search";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

import { typeCheckParam } from "@/utils/utils";

import styles from "@/assets/styles/sharedPage.module.css";
import fetcher from "@/lib/axios";
import CardList from "@/components/Card/CardList";
import { useRouter } from "next/router";

const SharedPage = () => {
  const [userData, setUserData] = useState<UserData | undefined>();
  const [folderData, setFolderData] = useState<UserFolderData | undefined>();
  const [linksListData, setLinksListData] = useState<LinksData | undefined>();
  const [searchData, setSearchData] = useState<LinksData | undefined>();
  const router = useRouter();

  const folderId = router.query.folderId;
  console.log(router);

  useEffect(() => {
    const fetchData = async () => {
      try {
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

        const userData = userDataResponse.data;
        const folderData = userFolderResponse.data;
        const linksListData = linksResponse.data;

        setUserData(userData);
        setFolderData(folderData);
        setLinksListData(linksListData);
      } catch (error) {
        // 에러 처리
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [folderId]);

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
