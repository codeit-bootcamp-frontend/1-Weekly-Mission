import { fetchUserData, fetchUserFolderData } from "@/api/folder";
import DataList from "@/components/datalist/DataList";
import FolderMenuList from "@/components/foldermenulist/FolderMenuList";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import FolderMenu from "@/components/menubar/FolderMenuBar";
import FolderNav from "@/components/nav/FolderNav";
import SearchBar from "@/components/searchbar/SearchBar";
import LocaleContext from "@/contexts/LocaleContext";
import ObserverProvider from "@/contexts/provider/ObserverProvider";
import SearchProvider from "@/contexts/provider/SearchProvider";
import useFetchData from "@/hooks/useFetchData";
import useFetchLinksData from "@/hooks/useFetchLinksdata";

import { mapFolderData, mapLinksData } from "@/utils/mapdata";
import { useRouter } from "next/router";
import React from "react";

export default function FolderPage() {
  // intersection
  const USER_ID = 1;
  const folderId = 1;
  const router = useRouter();
  console.log(router);
  const [userProfileData] = useFetchData(fetchUserData, {
    userId: USER_ID,
  });

  const [userFolderData] = useFetchData(fetchUserFolderData, {
    userId: USER_ID,
  });

  const result = userFolderData?.data || [];

  const obj = mapFolderData(result);
  const [mappedResult] = useFetchLinksData(mapLinksData, result);
  console.log(mappedResult);
  return (
    <>
      <ObserverProvider>
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
      </ObserverProvider>
    </>
  );
}
