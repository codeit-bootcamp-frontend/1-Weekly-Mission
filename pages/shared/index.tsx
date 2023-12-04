import React from "react";
import { ShareUser, getShareFolderData, getShareUserData } from "@/api/share";
import ShareNav from "@/components/nav/ShareNav";
import Header from "@/components/header/Header";
import SearchBar from "@/components/searchbar/SearchBar";
import ImageList from "@/components/imagelist/ImageList";
import Footer from "@/components/footer/Footer";
import SearchProvider from "@/contexts/provider/SearchProvider";
import { FolderContentsProps } from "@/api/share";

type SharedPageProps = {
  shareFolder: FolderContentsProps;
  shareUser: ShareUser;
};

export default function SharedPage(props: SharedPageProps) {
  const shareFolder = props.shareFolder;
  const shareUser = props.shareUser;

  return (
    <SearchProvider>
      <ShareNav data={shareUser} />
      <Header data={shareFolder} />
      <SearchBar />
      <ImageList data={shareFolder} />
      <Footer />
    </SearchProvider>
  );
}

export async function getStaticProps() {
  const shareFolderData = await getShareFolderData();
  const shareUserData = await getShareUserData();

  return {
    props: {
      shareFolder: shareFolderData,
      shareUser: shareUserData,
    },
  };
}
