import { useRouter } from "next/router";
import React, { useContext } from "react";
import LocaleContext from "../../contexts/LocaleContext";
import { useParams } from "next/navigation";
import { isContext } from "vm";
import { mapFolderData, mapLinksData } from "@/utils/mapdata";
import DataList from "@/components/datalist/DataList";
import SearchBar from "@/components/searchbar/SearchBar";
import ObserverProvider from "@/contexts/provider/ObserverProvider";
import SearchProvider from "@/contexts/provider/SearchProvider";
import FolderNav from "@/components/nav/FolderNav";
import Header from "@/components/header/Header";
import FolderMenuList from "@/components/foldermenulist/FolderMenuList";
import FolderMenu from "@/components/menubar/FolderMenuBar";
import Footer from "@/components/footer/Footer";
import useFetchData from "@/hooks/useFetchData";
import useFetchLinksData from "@/hooks/useFetchLinksdata";
import { fetchUserData, fetchUserFolderData } from "@/api/folder";
export default function FolderItem() {
  const router = useRouter();
  const USER_ID = 1;
  const { id } = router.query;
  const [userProfileData] = useFetchData(fetchUserData, {
    userId: USER_ID,
  });

  const [userFolderData] = useFetchData(fetchUserFolderData, {
    userId: USER_ID,
  });

  const result = userFolderData?.data || [];

  const obj = mapFolderData(result);
  const [mappedResult] = useFetchLinksData(mapLinksData, result);
  return (
    <>
      <ObserverProvider>
        <LocaleContext.Provider
          value={{
            ObjectValue: obj,
            LinkSDataArr: mappedResult,
            folderIdKey: id,
          }}
        >
          <SearchProvider>
            <FolderNav data={userProfileData} />
            <Header />
            <SearchBar />
            <FolderMenuList />
            <FolderMenu folderIdKey={id} />
            <DataList folderIdKey={id} />
            <Footer />
          </SearchProvider>
        </LocaleContext.Provider>
      </ObserverProvider>
    </>
  );
}

// export async function getStaticProps(context) {

// }

// export async function getStaticPaths() {
//   return {};
// }
