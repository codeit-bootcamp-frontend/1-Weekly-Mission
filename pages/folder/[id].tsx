import { useRouter } from "next/router";
import React from "react";
import { mapFolderData, mapLinksData } from "@/utils/mapdata";
import DataList from "@/components/datalist/DataList";
import SearchBar from "@/components/searchbar/SearchBar";
import FolderNav from "@/components/nav/FolderNav";
import Header from "@/components/header/Header";
import FolderMenuList from "@/components/foldermenulist/FolderMenuList";
import FolderMenu from "@/components/menubar/FolderMenuBar";
import Footer from "@/components/footer/Footer";
import useFetchLinksData from "@/hooks/useFetchLinksdata";
import { fetchUserData, fetchUserFolderData } from "@/api/folder";
import LocaleContext from "@/contexts/LocaleContext";
import { UserProfile, UserFolder } from "@/api/folder";
import FolderPageLayout from "@/layout/FolderPageLayout";

type FolderItemProps = {
  userProfileData: { data: UserProfile[] };
  userFolderData: { data: UserFolder[] };
};

export default function FolderItem(props: FolderItemProps) {
  const userProfileData = props.userProfileData;
  const userFolderData = props.userFolderData;
  const router = useRouter();
  const { id } = router.query;
  const folderId = id as string;
  const result = userFolderData?.data || [];
  const obj = mapFolderData(result);
  const [mappedResult] = useFetchLinksData(mapLinksData, result);
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
  const response = await fetchUserData({ userId: USER_ID });
  const userFolderData = await fetchUserFolderData({ userId: USER_ID });

  return {
    props: {
      userProfileData: response,
      userFolderData: userFolderData,
    },
  };
}
