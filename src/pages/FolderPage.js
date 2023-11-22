import React from "react";
import FolderNav from "../components/nav/FolderNav";
import Header from "../common/header/Header";
import SearchBar from "../common/searchBar/SearchBar";
import Footer from "../common/footer/Footer";
import Menubar from "../components/menuBar/Menubar";
import LocaleContext from "../contexts/LocaleContext";

import { useParams } from "react-router-dom";
import { fetchUserData, fetchUserFolderData } from "../api/folder";
import FolderMenu from "../components/menuBar/FolderMenu";

import useFetchData from "./../hooks/useFetchData";
import { mapFolderData, mapLinksData } from "../utils/mapData";
import useFetchLinksData from "./../hooks/useFetchLinksdata";
import DataList from "../components/linksdata/DataList";

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
        <FolderNav data={userProfileData} />
        <Header />
        <SearchBar />
        <Menubar mappedResult={mappedResult} folderIdKey={folderId} />
        <FolderMenu folderIdKey={folderId} />
        <DataList folderIdKey={folderId} />
        <Footer />
      </LocaleContext.Provider>
    </>
  );
}
