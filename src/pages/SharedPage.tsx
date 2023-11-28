import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import useAsync from "../hooks/useAsync";

import getUserLinks from "../api/getUserLinks";
import getUserFolder from "../api/getUserFolder";
import getUser from "../api/getUser";

import { formatDate, getTimeDiff, prettyFormatTimeDiff } from "../utils/utils";

import FolderInfo from "../components/FolderInfo/FolderInfo";
import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import Loadable from "../components/Skeleton/Loadable";
import FolderInfoSkeleton from "../components/Skeleton/FolderInfoSkeleton/FolderInfoSkeleton";
import CardListSkeleton from "../components/Skeleton/CardListSkeleton/CardListSkeleton";
import SharedPageCardItem from "../components/Card/SharedPageCardItem";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const SharedPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, _] = useSearchParams();
  const [userData, setUserData] = useState<UserData>();
  const [folderData, setFolderData] = useState<UserFolderData>();
  const [linksData, setLinksData] = useState<LinksData>();
  const [searchData, setSearchData] = useState(linksData);
  const { pending: isLoadingUserData, wrappedFunction: getUserDataAsync } =
    useAsync(getUser);
  const { wrappedFunction: getUserFolderDataAsync } = useAsync(getUserFolder);
  const { pending: isLoadingLinksList, wrappedFunction: getLinksListAsync } =
    useAsync(getUserLinks);

  const userId = Number(searchParams.get("user"));
  const folderId = Number(searchParams.get("folder"));

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
      <NavBar />
      <Loadable isLoading={isLoadingUserData} fallback={<FolderInfoSkeleton />}>
        <FolderInfo
          profileImage={userData?.data?.[0]?.image_source}
          userName={userData?.data?.[0]?.name}
          folderName={folderData?.data?.[0]?.name || ""}
        />
      </Loadable>
      <Search linksListData={linksData} onChange={setSearchData} />
      <Loadable
        isLoading={isLoadingLinksList}
        fallback={<CardListSkeleton size={9} />}
      >
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
      </Loadable>
      <Footer />
    </>
  );
};

export default SharedPage;
