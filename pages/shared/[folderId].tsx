import { GetServerSidePropsContext } from "next";
import {
  getAuthShareUserData,
  getAuthSharedFolderData,
  FolderContentsProps,
  getAuthSharedLinksData,
  getCurrentUser,
} from "@/api/share";
import React, { useEffect, useState } from "react";
import SearchProvider from "@/contexts/provider/SearchProvider";
import ShareNav from "@/components/nav/ShareNav";
import Header from "@/components/header/Header";
import Custom404 from "../404";
import SearchBar from "@/components/searchbar/SearchBar";
import ImageList from "@/components/imagelist/ImageList";
import Footer from "@/components/footer/Footer";
export default function SharedFolderIdPage({
  errorCode,
  combinedData,
}: {
  errorCode: string;
  combinedData: FolderContentsProps;
}) {
  const [user, setUser] = useState();
  useEffect(() => {
    (async () => {
      const currentToken = localStorage.getItem("myToken")!;
      const shareUser = await getCurrentUser(currentToken);
      setUser(shareUser.data);
    })();
  }, []);

  if (errorCode) {
    return <Custom404 />;
  }

  return (
    <SearchProvider>
      <ShareNav data={user} />
      <Header data={combinedData} />
      <SearchBar />
      <ImageList data={combinedData} />
      <Footer />
    </SearchProvider>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { folderId } = context.query;

  const sharedFolderData = await getAuthSharedFolderData({
    folderId: folderId,
  });

  if (sharedFolderData.data.length === 0) {
    return {
      props: {
        errorCode: 404,
      },
    };
  }
  const folderData = sharedFolderData.data[sharedFolderData.data.length - 1];

  const { user_id } = folderData;

  const sharedUserData = await getAuthShareUserData({ userId: user_id });
  const userData = sharedUserData.data[sharedUserData.data.length - 1];
  const sharedLinksData = await getAuthSharedLinksData({
    userId: user_id,
    folderId: folderId,
  });

  const linksData = sharedLinksData.data;
  const propsData = {
    id: folderData.id,
    name: folderData.name,
    owner: {
      id: userData.id,
      name: userData.name,
      profileImageSource: userData.image_source,
    },
    links: linksData,
  };

  return {
    props: {
      sharedFolder: folderData,
      sharedUser: userData,
      combinedData: { folder: propsData },
    },
  };
};
