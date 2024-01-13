import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

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
import CardList from "@/components/Card/CardList";

import styles from "@/assets/styles/folderPage.module.css";
import fetcher from "@/lib/axios";
import removeTokens from "@/utils/removeTokens";

const FolderPage = () => {
  const router = useRouter();
  const [currentFolderName, setCurrentFolderName] = useState("전체");
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState<FolderLink[] | undefined>([]);

  const { data: folderData } = useQuery<UserFolders[]>({
    queryKey: ["folders"],
    queryFn: async () => {
      const response = await fetcher<UserFolders[]>({ url: `/folders` });
      return response.data;
    },
  });

  const folderId = router.query.folderId;

  const { data: linksListData } = useQuery<FolderLink[]>({
    queryKey: ["links", folderId],
    queryFn: async () => {
      const userId = localStorage.getItem("userId");

      const response = await fetcher<FolderLink[]>({
        url:
          folderId === "all"
            ? `/users/${userId}/links`
            : `/folders/${folderId}/links`,
      });

      return response.data;
    },

    enabled: folderId !== undefined,
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      removeTokens();
      router.push("/signin");
    }
  }, [router]);

  // 검색 로직 추가
  useEffect(() => {
    setSearchData(linksListData);
  }, [linksListData]);
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
            <AddLinkButton
              inputValue={inputValue}
              folderListData={folderData}
            />
          </AddLinkInput>
        </AddLink>
        <Search linksListData={linksListData} onChange={setSearchData} />
        <Category>
          <CategoryList
            folderListData={folderData}
            onClick={setCurrentFolderName}
          >
            <AddFolderButton />
          </CategoryList>
        </Category>
        <FolderUtils>
          <CurrentFolder>{currentFolderName}</CurrentFolder>
          {currentFolderName !== "전체" && (
            <FolderEdit
              currentFolderName={currentFolderName}
              setCurrentFolderName={setCurrentFolderName}
            />
          )}
        </FolderUtils>
        <Card>
          <CardList
            type="folder"
            LinksData={searchData}
            folderListData={folderData}
          />
        </Card>
        {searchData?.length === 0 ? <NotFoundLink /> : undefined}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default FolderPage;
