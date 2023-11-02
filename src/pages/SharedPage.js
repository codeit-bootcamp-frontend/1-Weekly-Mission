import { useCallback, useEffect, useState } from "react";
import styles from "./SharedPage.module.css";
import { formatDate, getTimeDiff, prettyFormatTimeDiff } from "../utils/utils";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import FolderInfo from "../components/FolderInfo/FolderInfo";
import Card from "../components/Card/Card";
import getFolder from "../api/getFolder";
import Search from "../components/Search/Search";
import useAsync from "../hooks/useAsync";
import Loadable from "./../components/Skeleton/Loadable";
import FolderInfoSkeleton from "./../components/Skeleton/FolderInfoSkeleton/FolderInfoSkeleton";
import CardListSkeleton from "../components/Skeleton/CardListSkeleton/CardListSkeleton";
import SharedPageCardItem from "../components/Card/SharedPageCardItem";
import CardListItem from "../components/Card/CardListItem";

const SharedPage = () => {
  const [folderData, setFolderData] = useState({});
  const { status: isLoading, wrappedFunction: getFolerAsync } = useAsync(getFolder);

  const handleLoadFolderData = useCallback(async () => {
    const folderResponse = await getFolerAsync();
    const { links, name: folderName, owner } = folderResponse.folder;
    const { profileImageSource, name: userName } = owner;

    setFolderData({ links, profileImageSource, userName, folderName });
  }, [getFolerAsync]);

  useEffect(() => {
    handleLoadFolderData();
  }, [handleLoadFolderData]);

  return (
    <>
      <header className={styles.header}>
        <NavBar />
        <Loadable isLoading={isLoading} fallback={<FolderInfoSkeleton />}>
          <FolderInfo
            profileImage={folderData?.profileImageSource}
            userName={folderData?.userName}
            folderName={folderData?.folderName}
          />
        </Loadable>
      </header>
      <main>
        <Search />
        <Loadable isLoading={isLoading} fallback={<CardListSkeleton size={9} />}>
          <Card>
            {folderData?.links &&
              folderData.links.map((link) => {
                const { createdAt, url, title, description, imageSource } = link;
                const formattedCreatedAt = formatDate(createdAt);
                const timeDiff = getTimeDiff(createdAt);
                const formatTimeDiff = prettyFormatTimeDiff(timeDiff);
                return (
                  <CardListItem key={url}>
                    <SharedPageCardItem
                      formatTimeDiff={formatTimeDiff}
                      formattedCreatedAt={formattedCreatedAt}
                      url={url}
                      title={title}
                      description={description}
                      imageSource={imageSource}
                    />
                  </CardListItem>
                );
              })}
          </Card>
        </Loadable>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SharedPage;
