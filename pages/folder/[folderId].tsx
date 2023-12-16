import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DataList from "@/components/datalist/DataList";
import SearchBar from "@/components/searchbar/SearchBar";
import FolderNav from "@/components/nav/FolderNav";
import Header from "@/components/header/Header";
import FolderMenuList from "@/components/foldermenulist/FolderMenuList";
import Footer from "@/components/footer/Footer";
import { AuthFolderData, AuthFolderLinks } from "@/api/folder";
import FolderPageLayout from "@/layout/FolderPageLayout";
import { getCurrentUser } from "@/api/share";
import { Folder, FolderMenuListProps } from "@/types/folderMenuListTypes";
import axios from "axios";
import FolderMenuBar from "@/components/menubar/FolderMenuBar";

export default function FolderItem() {
  const router = useRouter();
  const { folderId } = router.query as { folderId: string };
  const [user, setUser] = useState();
  const [data, setData] = useState();
  const [folderMenu, setFolderMenu] = useState<FolderMenuListProps[]>();

  useEffect(() => {
    (async () => {
      const shareUser = await getCurrentUser();
      if (axios.isAxiosError(shareUser)) return;
      const folderMenu = await AuthFolderData();
      const folderLinksData = await AuthFolderLinks(folderId);
      const folderMenuList = folderMenu.data.folder;
      const copyfolderMenuList = folderMenuList.slice();
      const combinedFolderMenuList = [
        {
          id: 0,
          name: "전체",
          user_id: 25,
          links: [],
        },
        ...copyfolderMenuList,
      ];

      const folderLink = folderLinksData.data.folder!;
      const filteredLinks = folderLink.filter(
        (item: Folder) => item.folder_id === Number(folderId)
      );
      setUser(shareUser);
      setData(filteredLinks);
      setFolderMenu(combinedFolderMenuList);
    })();
  }, [folderId]);

  const mappedObject = folderMenu?.reduce((acc, item) => {
    return {
      ...acc,
      [Number(item.id)]: {
        folderId: item.id,
        folderName: item.name,
        links: item.links,
      },
    };
  }, {});
  return (
    <>
      <FolderPageLayout>
        <FolderNav userProfile={user} />
        <Header />
        <SearchBar />
        <FolderMenuList folderMenu={folderMenu} folderId={folderId} />
        <FolderMenuBar folderIdKey={folderId} data={mappedObject} />
        <DataList folderIdKey={folderId} data={data} />
        <Footer />
      </FolderPageLayout>
    </>
  );
}
