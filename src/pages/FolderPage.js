import { useCallback, useEffect, useState } from "react";
import styles from "./FolderPage.module.css";
import { formatDate, getTimeDiff, prettyFormatTimeDiff } from "../utils/utils";
import { useFolderId, useUserId } from "../contexts/UserContext";
import useAsync from "../hooks/useAsync";
import AddLink from "../components/AddLink/AddLink";
import Search from "../components/Search/Search";
import getUserFolders from "../api/getUserFolders";
import Category from "../components/Category/Category";
import Card from "../components/Card/Card";
import getUserLinks from "../api/getUserLinks";
import FolderUtils from "../components/FolderUtils/FolderUtils";
import Loadable from "../components/Skeleton/Loadable";
import CardListSkeleton from "../components/Skeleton/CardListSkeleton/CardListSkeleton";
import CardListItem from "../components/Card/CardListItem";
import FolderPageCardItem from "../components/Card/FolderPageCardItem";
import NotFoundLink from "../components/Card/NotFoundLink";
import AddLinkModal from "../components/Modal/AddLinkModal";
import AddLinkInput from "./../components/AddLink/AddLinkInput";
import CategoryList from "./../components/Category/CategoryList";
import AddFolderButton from "../components/AddFolderButton/AddFolderButton";
import AddFolderModal from "./../components/Modal/AddFolderModal";
import AddLinkButton from "./../components/AddLink/AddLinkButton";
import CurrentFolder from "./../components/FolderUtils/CurrentFolder";
import FolderEdit from "./../components/FolderUtils/FolderEdit";

const FolderPage = () => {
  const userId = useUserId();
  const folderId = useFolderId();

  const [currentFolderName, SetCurrentFolderName] = useState("전체");
  const [inputValue, setInputValue] = useState("");
  const [folderListData, setFolderListData] = useState([]);
  const [linksListData, setLinksListData] = useState([]);
  const { wrappedFunction: getFolderListAsync } = useAsync(getUserFolders);
  const { status: isLoadingLinksList, wrappedFunction: getLinksListAsync } = useAsync(getUserLinks);

  const handleLoadFolderListData = useCallback(async () => {
    if (!userId) return;
    const [folderListResponseData, linksListResponseData] = await Promise.all([
      getFolderListAsync({ userId }),
      getLinksListAsync({ userId, folderId }),
    ]);
    setFolderListData(folderListResponseData);
    setLinksListData(linksListResponseData);
  }, [getFolderListAsync, getLinksListAsync, userId, folderId]);

  useEffect(() => {
    handleLoadFolderListData();
  }, [handleLoadFolderListData]);
  return (
    <>
      <header className={styles.header}>
        <AddLink>
          <AddLinkInput inputValue={inputValue} onChange={setInputValue}>
            <AddLinkButton inputValue={inputValue}>
              <AddLinkModal inputValue={inputValue} folderListData={folderListData} />
            </AddLinkButton>
          </AddLinkInput>
        </AddLink>
      </header>
      <main className={styles.main}>
        <Search />
        <Category>
          <CategoryList folderListData={folderListData} currentFolder={SetCurrentFolderName}>
            <AddFolderButton>
              <AddFolderModal />
            </AddFolderButton>
          </CategoryList>
        </Category>
        <FolderUtils>
          <CurrentFolder>{currentFolderName}</CurrentFolder>
          {currentFolderName !== "전체" && <FolderEdit currentFolderName={currentFolderName} />}
        </FolderUtils>
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
                    <FolderPageCardItem
                      folderListData={folderListData}
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
          {linksListData?.data?.length === 0 ? <NotFoundLink /> : undefined}
        </Loadable>
      </main>
    </>
  );
};

export default FolderPage;
