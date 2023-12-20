"use client";
import { AuthFolderData, AuthFolderLinks } from "@/api/folder";
import DataList from "@/components/datalist/DataList";
import FolderMenuList from "@/components/foldermenulist/FolderMenuList";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import FolderMenuBar from "@/components/menubar/FolderMenuBar";
import FolderNav from "@/components/nav/FolderNav";
import SearchBar from "@/components/searchbar/SearchBar";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FolderPageLayout from "@/layout/FolderPageLayout";
import { getCurrentUser } from "@/api/share";
import { FolderMenuListProps } from "@/types/folderMenuListTypes";
import axios from "axios";

export default function FolderPages() {
  const router = useRouter();
  const { id } = router.query;
  const folderId = id as string;
  const [user, setUser] = useState();
  const [data, setData] = useState();
  const [folderMenu, setFolderMenu] = useState<FolderMenuListProps[]>();

  useEffect(() => {
    (async () => {
      const shareUser = await getCurrentUser();
      if (axios.isAxiosError(shareUser)) return;
      const folderMenu = await AuthFolderData();
      const folderLink = await AuthFolderLinks();
      const data = folderLink.data.folder;
      const folderMenuList = folderMenu.data?.folder;
      const copyfolderMenuList = folderMenuList.slice();
      const combinedFolderMenuList = [
        {
          id: 0,
          name: "전체",
          user_id: shareUser.data[0].id,
          links: folderLink,
        },
        ...copyfolderMenuList,
      ];
      setFolderMenu(combinedFolderMenuList);
      setData(data);
      setUser(shareUser);
    })();
  }, []);

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
        <FolderMenuList folderMenu={folderMenu} folderId="0" />
        <FolderMenuBar folderIdKey={folderId} data={mappedObject} />
        <DataList folderIdKey={folderId} data={data} />
        <Footer />
      </FolderPageLayout>
    </>
  );
}
