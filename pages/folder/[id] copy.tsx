import { useRouter } from "next/router";
import React from "react";

import { mapFolderData, mapLinksData } from "@/utils/mapdata";
import DataList from "@/components/datalist/DataList";
import SearchBar from "@/components/searchbar/SearchBar";
import FooterProvider from "@/contexts/provider/FooterProvider";
import HeaderProvider from "@/contexts/provider/HeaderProvider";
import SearchProvider from "@/contexts/provider/SearchProvider";
import FolderNav from "@/components/nav/FolderNav";
import Header from "@/components/header/Header";
import FolderMenuList from "@/components/foldermenulist/FolderMenuList";
import FolderMenu from "@/components/menubar/FolderMenuBar";
import Footer from "@/components/footer/Footer";
import useFetchLinksData from "@/hooks/useFetchLinksdata";
import { fetchUserData, fetchUserFolderData } from "@/api/folder";
import LocaleContext from "@/contexts/LocaleContext";
import { UserProfile, UserFolder } from "@/api/folder";

type FolderItemProps = {
  userFolderData: { data: UserFolder[] };
  userProfileData: { data: UserProfile };
};

export default function FolderItem(props: FolderItemProps) {
  const userProfileData = props.userProfileData;
  const userFolderData = props.userFolderData;
  const router = useRouter();

  const { id } = router.query;

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
              <FolderNav userProfile={userProfileData} />
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

export async function getServerSideProps() {
  const USER_ID = 1;
  const response = await fetchUserData({ userId: USER_ID });
  const userFolderData = await fetchUserFolderData({ userId: USER_ID });

  return {
    props: {
      userProfileData: response,
      userFolderData: userFolderData,
    },
  };
}
