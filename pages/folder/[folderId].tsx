import { GetServerSidePropsContext } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";

import AddLink from "@/components/AddLink/AddLink";
import FolderUtils from "@/components/FolderUtils/FolderUtils";
import Search from "@/components/Search/Search";
import Category from "@/components/Category/Category";
import Card from "@/components/Card/Card";
import NotFoundLink from "@/components/NotFoundLink/NotFoundLink";
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

import styles from "@/assets/styles/folderPage.module.css";
import fetcher from "@/lib/axios";
import CardList from "@/components/Card/CardList";
import { useRouter } from "next/router";

interface Props {
  folderListData: UserFolderData;
  linksListData: LinksData;
}

const FolderPage = () => {
  const router = useRouter();
  const [folderListData, setFolderListData] = useState("");
  const [linksListData, setLinksListData] = useState("");
  const [currentFolderName, setCurrentFolderName] = useState("전체");
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState<LinksData | undefined>(
    linksListData
  );

  const folderId = router.query.folderId;

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/signin");
    }
    const fetchData = async () => {
      const userId = localStorage.getItem("userId");
      const [folderListResponseData, linksListResponseData] = await Promise.all(
        [
          fetcher<UserFolderData>({ url: `/users/${userId}/folders` }),
          fetcher<LinksData>({
            url: `/users/${userId}/links${
              folderId ? `?folderId=${folderId}` : ""
            }`,
          }),
        ]
      );
      const folderList = folderListResponseData.data;
      const linksList = linksListResponseData.data;
      setFolderListData(folderList);
      setLinksListData(linksList);
    };
    fetchData();
  }, [folderId, router]);

  return (
    <>
      <Head>
        <title>Folder - LinkBrary</title>
      </Head>
      <nav>
        <NavBar />
      </nav>
      <main className={styles.main}>
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
          <CardList
            type="folder"
            LinksData={searchData}
            folderListData={folderListData}
          />
        </Card>
        {searchData?.data?.length === 0 ? <NotFoundLink /> : undefined}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default FolderPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  if (typeof window !== "undefined") {
    const userId = JSON.parse(sessionStorage.getItem("userId") || "");
    console.log(userId);
    const folderId = params?.folderId === "all" ? "" : params?.folderId;

    try {
      if (userId !== undefined && folderId !== undefined) {
        const [folderListResponseData, linksListResponseData] =
          await Promise.all([
            fetcher<UserFolderData>({ url: `/users/${userId}/folders` }),
            fetcher<LinksData>({
              url: `/users/${userId}/links${
                folderId ? `?folderId=${folderId}` : ""
              }`,
            }),
          ]);

        return {
          props: {
            folderListData: folderListResponseData.data,
            linksListData: linksListResponseData.data,
          },
        };
      }
    } catch (e) {
      console.error(e);
    }
  }

  return {
    props: {
      folderListData: null,
      linksListData: null,
    },
  };
};
