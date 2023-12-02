import { fetchUserData, fetchUserFolderData } from "@/api/folder";
import DataList from "@/components/datalist/DataList";
import FolderMenuList from "@/components/foldermenulist/FolderMenuList";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import FolderMenu from "@/components/menubar/FolderMenuBar";
import FolderNav from "@/components/nav/FolderNav";
import SearchBar from "@/components/searchbar/SearchBar";
import LocaleContext from "@/contexts/LocaleContext";
import SearchProvider from "@/contexts/provider/SearchProvider";
import useFetchData from "@/hooks/useFetchData";
import useFetchLinksData from "@/hooks/useFetchLinksdata";
import { mapFolderData, mapLinksData } from "@/utils/mapdata";
import { useRouter } from "next/router";
import React from "react";
import Script from "next/script";
import FooterProvider from "@/contexts/provider/FooterProvider";
import HeaderProvider from "@/contexts/provider/HeaderProvider";

export default function FolderPage() {
  const USER_ID = 1;
  const router = useRouter();
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
      <FooterProvider>
        <HeaderProvider>
          <LocaleContext.Provider
            value={{
              ObjectValue: obj,
              LinkSDataArr: mappedResult,
              folderIdKey: id,
            }}
          >
            <SearchProvider>
              <Script
                defer
                src="https://developers.kakao.com/sdk/js/kakao.min.js"
                strategy="lazyOnload"
                // onLoad={KaKao}
              ></Script>
              ;
              <FolderNav data={userProfileData} />
              <Header />
              <SearchBar />
              <FolderMenuList />
              <FolderMenu folderIdKey={id} />
              <DataList folderIdKey={id} />
              <Footer />
            </SearchProvider>
          </LocaleContext.Provider>
        </HeaderProvider>
      </FooterProvider>
    </>
  );
}
