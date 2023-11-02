import { useCallback, useEffect, useState } from "react";
import styles from "./FolderPage.module.css";
import { formatDate, getTimeDiff, prettyFormatTimeDiff } from "../utils/utils";
import useAsync from "../hooks/useAsync";
import AddLink from "../components/AddLink/AddLink";
import NavBar from "../components/NavBar/NavBar";
import Search from "../components/Search/Search";
import Footer from "../components/Footer/Footer";
import getUserFolders from "../api/getUserFolders";
import Category from "../components/Category/Category";
import Card from "../components/Card/Card";
import getUserLinks from "../api/getUserLinks";
import FolderUtils from "../components/FolderUtils/FolderUtils";
import FloatingAddFolder from "../components/FloatingAddFolder/FloatingAddFolder";
import Loadable from "../components/Skeleton/Loadable";
import CardListSkeleton from "../components/Skeleton/CardListSkeleton/CardListSkeleton";
import CategoryListSkeleton from "./../components/Skeleton/CategoryListSkeleton/CategoryListSkeleton";
import CardListItem from "../components/Card/CardListItem";
import SharedPageCardItem from "../components/Card/SharedPageCardItem";

const FolderPage = () => {
  const [userId, setUserId] = useState(null);
  const [currentFolderName, SetCurrentFolderName] = useState(undefined);
  const [folderListData, setFolderListData] = useState([]);
  const [linksListData, setLinksListData] = useState([]);
  const [selectedCategoryId, SetSelectedCategoryId] = useState("");
  const { status: isLoadingFolderList, wrappedFunction: getFolderListAsync } = useAsync(getUserFolders);
  const { status: isLoadingLinksList, wrappedFunction: getLinksListAsync } = useAsync(getUserLinks);

  const handleLoadFolderListData = useCallback(async () => {
    const [folderListResponseData, linksListResponseData] = await Promise.all([
      getFolderListAsync({ userId }),
      getLinksListAsync({ userId, folderId: selectedCategoryId }),
    ]);

    setFolderListData(folderListResponseData);
    setLinksListData(linksListResponseData);
  }, [getFolderListAsync, getLinksListAsync, selectedCategoryId, userId]);

  useEffect(() => {
    handleLoadFolderListData();
  }, [handleLoadFolderListData]);
  return (
    <>
      <header className={styles.header}>
        <NavBar userId={setUserId} />
        <AddLink />
      </header>
      <main className={styles.main}>
        <Search />
        <Loadable isLoading={isLoadingFolderList} fallback={<CategoryListSkeleton size={6} />}>
          <Category
            folderListData={folderListData}
            currentFolder={SetCurrentFolderName}
            selectedCategoryId={selectedCategoryId}
            onClick={SetSelectedCategoryId}
          />
        </Loadable>
        <FolderUtils userId={userId} currentFolderName={currentFolderName} />
        <Loadable isLoading={isLoadingLinksList} fallback={<CardListSkeleton size={9} />}>
          <Card>
            {linksListData?.data &&
              linksListData.data.map((link) => {
                const { created_at, url, title, description, image_source } = link;
                const formattedCreatedAt = formatDate(created_at);
                const timeDiff = getTimeDiff(created_at);
                const formatTimeDiff = prettyFormatTimeDiff(timeDiff);
                return (
                  <CardListItem key={url}>
                    <SharedPageCardItem
                      formatTimeDiff={formatTimeDiff}
                      formattedCreatedAt={formattedCreatedAt}
                      url={url}
                      title={title}
                      description={description}
                      imageSource={image_source}
                    />
                  </CardListItem>
                );
              })}
          </Card>
        </Loadable>
        <FloatingAddFolder />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default FolderPage;
