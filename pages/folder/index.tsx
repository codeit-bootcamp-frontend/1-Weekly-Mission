import { fetchUserData, fetchUserFolderData } from "@/api/folder";
import DataList from "@/components/datalist/DataList";
import FolderMenuList from "@/components/foldermenulist/FolderMenuList";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import FolderMenu from "@/components/menubar/FolderMenuBar";
import FolderNav from "@/components/nav/FolderNav";
import SearchBar from "@/components/searchbar/SearchBar";
import LocaleContext from "@/contexts/LocaleContext";
import useFetchLinksData from "@/hooks/useFetchLinksdata";
import { mapFolderData, mapLinksData } from "@/utils/mapdata";
import { useRouter } from "next/router";
import React from "react";
import { UserProfile, UserFolder } from "@/api/folder";
import FolderPageLayout from "@/layout/FolderPageLayout";

type FolderPageProps = {
  userProfileData: { data: UserProfile[] };
  userFolderData: { data: UserFolder[] };
};

export default function FolderPage(props: FolderPageProps) {
  const userProfileData = props.userProfileData;
  const userFolderData = props.userFolderData;

  const router = useRouter();
  const { id } = router.query;
  const folderId = id as string;
  const result = userFolderData?.data || [];

  const obj = mapFolderData(result);

  const [mappedResult, isLoading] = useFetchLinksData(mapLinksData, result);

  return (
    <>
      <FolderPageLayout>
        <LocaleContext.Provider
          value={{
            ObjectValue: obj,
            LinkSDataArr: mappedResult,
            folderIdKey: folderId,
          }}
        >
          <FolderNav userProfile={userProfileData} />
          <Header />
          <SearchBar />
          <FolderMenuList />
          <FolderMenu folderIdKey={folderId} />
          <DataList folderIdKey={folderId} />
          <Footer />
        </LocaleContext.Provider>
      </FolderPageLayout>
    </>
  );
}

export async function getServerSideProps() {
  const USER_ID = 1;
  const userProfileData = await fetchUserData({ userId: USER_ID });

  const userFolderData = await fetchUserFolderData({ userId: USER_ID });
  return {
    props: {
      userProfileData: userProfileData,
      userFolderData: userFolderData,
    },
  };
}
