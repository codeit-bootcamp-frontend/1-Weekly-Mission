import { useCallback, useEffect, useState } from "react";

import useAsync from "../hooks/useAsync";
import { useFolderId, useUserId } from "../contexts/UserContext";

import getUserFolders from "../api/getUserFolders";
import getUserLinks from "../api/getUserLinks";

import { formatDate, getTimeDiff, prettyFormatTimeDiff } from "../utils/utils";

import AddLink from "../components/AddLink/AddLink";
import FolderUtils from "../components/FolderUtils/FolderUtils";
import Search from "../components/Search/Search";
import Category from "../components/Category/Category";
import Card from "../components/Card/Card";
import Loadable from "../components/Skeleton/Loadable";
import CardListSkeleton from "../components/Skeleton/CardListSkeleton/CardListSkeleton";
import FolderPageCardItem from "../components/Card/FolderPageCardItem";
import NotFoundLink from "../components/Card/NotFoundLink";
import AddLinkModalContent from "../components/Modal/AddLinkModalContent/AddLinkModalContent";
import AddLinkInput from "../components/AddLink/AddLinkInput";
import CategoryList from "../components/Category/CategoryList";
import AddFolderButton from "../components/AddFolderButton/AddFolderButton";
import AddFolderModalContent from "../components/Modal/AddFolderModalContent/AddFolderModalContent";
import AddLinkButton from "../components/AddLink/AddLinkButton";
import CurrentFolder from "../components/FolderUtils/CurrentFolder";
import FolderEdit from "../components/FolderUtils/FolderEdit";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { ObserverProvider } from "../contexts/ObserverContext";

const FolderPage = () => {
  const userId = useUserId();
  const folderId = useFolderId();

  const [currentFolderName, SetCurrentFolderName] = useState("전체");
  const [inputValue, setInputValue] = useState("");
  const [folderListData, setFolderListData] = useState<UserFolderData>({
    data: [
      {
        id: 0,
        created_at: "",
        name: "",
        user_id: 0,
        link: {
          count: 0,
        },
      },
    ],
  });
  const [linksListData, setLinksListData] = useState<LinksData>();
  const [searchData, setSearchData] = useState(linksListData);
  const { wrappedFunction: getFolderListAsync } = useAsync(getUserFolders);
  const { pending: isLoadingLinksList, wrappedFunction: getLinksListAsync } =
    useAsync(getUserLinks);

  const handleLoadFolderListData = useCallback(async () => {
    if (!userId) return;

    const [folderListResponseData, linksListResponseData] = await Promise.all([
      getFolderListAsync({ userId }),
      getLinksListAsync({ userId, folderId }),
    ]);

    setFolderListData(folderListResponseData as UserFolderData);
    setLinksListData(linksListResponseData as LinksData);
  }, [getFolderListAsync, getLinksListAsync, userId, folderId]);

  useEffect(() => {
    handleLoadFolderListData();
  }, [handleLoadFolderListData]);

  return (
    <>
      <ObserverProvider>
        <NavBar />
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
            currentFolder={SetCurrentFolderName}
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
        <Loadable
          isLoading={isLoadingLinksList}
          fallback={<CardListSkeleton size={9} />}
        >
          <Card>
            {searchData?.data &&
              searchData.data.map((link) => {
                const { created_at, url, title, description, image_source } =
                  link;
                const formattedCreatedAt = formatDate(created_at);
                const timeDiff = getTimeDiff(created_at);
                const formatTimeDiff = prettyFormatTimeDiff(timeDiff);

                return (
                  <FolderPageCardItem
                    key={url}
                    folderListData={folderListData}
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
          {searchData?.data?.length === 0 ? <NotFoundLink /> : undefined}
        </Loadable>
        <Footer />
      </ObserverProvider>
    </>
  );
};

export default FolderPage;
