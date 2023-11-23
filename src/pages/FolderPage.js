import React from "react";
import FolderNav from "../components/nav/FolderNav";
import Header from "../common/header/Header";
import SearchBar from "../common/searchBar/SearchBar";
import Footer from "../common/footer/Footer";
import LocaleContext from "../contexts/LocaleContext";
import SearchProvider from "../contexts/provider/SearchProvider";
import { useParams } from "react-router-dom";
import { fetchUserData, fetchUserFolderData } from "../api/folder";
import FolderMenu from "../components/menubar/FolderMenu";

import useFetchData from "./../hooks/useFetchData";
import { mapFolderData, mapLinksData } from "../utils/mapData";
import useFetchLinksData from "./../hooks/useFetchLinksdata";
import DataList from "../components/linksdata/DataList";
import FolderMenuList from "../components/foldermenulist/FolderMenuList";

export default function FolderPage() {
  const USER_ID = 1;
  const { folderId } = useParams();
  const [userProfileData] = useFetchData(fetchUserData, {
    userId: USER_ID,
  });

  const [userFolderData] = useFetchData(fetchUserFolderData, {
    userId: USER_ID,
  });

  const result = userFolderData?.data || [];

  const obj = mapFolderData(result);
  const [mappedResult, isLoading] = useFetchLinksData(mapLinksData, result);

  return (
    <>
      <LocaleContext.Provider
        value={{
          ObjectValue: obj,
          LinkSDataArr: mappedResult,
          folderIdKey: folderId,
        }}
      >
        <SearchProvider>
          <FolderNav data={userProfileData} />
          <Header />
          <SearchBar />
          <FolderMenuList />
          <FolderMenu folderIdKey={folderId} />
          <DataList folderIdKey={folderId} />
          <Footer />
        </SearchProvider>
      </LocaleContext.Provider>
    </>
  );
}
