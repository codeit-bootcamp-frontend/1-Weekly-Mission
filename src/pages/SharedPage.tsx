import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./SharedPage.module.css";

import { formatDate, getTimeDiff, prettyFormatTimeDiff } from "../utils/utils";
import FolderInfo from "../components/FolderInfo/FolderInfo";
import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import useAsync from "../hooks/useAsync";
import Loadable from "../components/Skeleton/Loadable";
import FolderInfoSkeleton from "../components/Skeleton/FolderInfoSkeleton/FolderInfoSkeleton";
import CardListSkeleton from "../components/Skeleton/CardListSkeleton/CardListSkeleton";
import SharedPageCardItem from "../components/Card/SharedPageCardItem";
import getUserLinks from "../api/getUserLinks";
import getUserFolder from "../api/getUserFolder";
import getUser from "../api/getUser";

// type 수정해야함
const SharedPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, _] = useSearchParams();
  const [userData, setUserData] = useState<any>({});
  const [folderData, setFolderData] = useState<any>({});
  const [linksData, setLinksData] = useState<any>({});
  const { status: isLoadingUserData, wrappedFunction: getUserDataAsync }: any =
    useAsync(getUser);
  const { wrappedFunction: getUserFolderDataAsync }: any =
    useAsync(getUserFolder);
  const {
    status: isLoadingLinksList,
    wrappedFunction: getLinksListAsync,
  }: any = useAsync(getUserLinks);

  const userId = searchParams.get("user");
  const folderId = searchParams.get("folder");

  const handleLoadFolderData = useCallback(async () => {
    try {
      const [userDataResponseData, userFolderResponseData, linksResponseData] =
        await Promise.all([
          getUserDataAsync({ userId }),
          getUserFolderDataAsync({ userId, folderId }),
          getLinksListAsync({ userId, folderId }),
        ]);

      setUserData({ ...userDataResponseData });
      setFolderData({ ...userFolderResponseData });
      setLinksData({ ...linksResponseData });
    } catch (e) {
      return;
    }
  }, [
    getUserDataAsync,
    getUserFolderDataAsync,
    getLinksListAsync,
    userId,
    folderId,
  ]);

  useEffect(() => {
    handleLoadFolderData();
  }, [handleLoadFolderData]);

  return (
    <>
      <header className={styles.header}>
        <Loadable
          isLoading={isLoadingUserData}
          fallback={<FolderInfoSkeleton />}
        >
          <FolderInfo
            profileImage={userData?.data?.[0].image_source}
            userName={userData?.data?.[0]?.name}
            folderName={folderData?.data?.[0]?.name || ""}
          />
        </Loadable>
      </header>
      <main>
        <Search />
        <Loadable
          isLoading={isLoadingLinksList}
          fallback={<CardListSkeleton size={9} />}
        >
          <Card>
            {linksData?.data &&
              linksData.data.map((link: any) => {
                const {
                  id,
                  created_at,
                  url,
                  title,
                  description,
                  image_source,
                } = link;
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
        </Loadable>
      </main>
    </>
  );
};

export default SharedPage;
