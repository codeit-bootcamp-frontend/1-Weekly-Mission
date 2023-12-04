import React from "react";
import useFetchData from "@/hooks/useFetchData";
import { getShareFolderData } from "@/api/share";
import ShareNav from "@/components/nav/ShareNav";
import Header from "@/components/header/Header";
import SearchBar from "@/components/searchbar/SearchBar";
import ImageList from "@/components/imagelist/ImageList";
import Footer from "@/components/footer/Footer";
import SearchProvider from "@/contexts/provider/SearchProvider";
import { FolderContents } from "@/api/share";
type a = {
  data: SharedPageProps;
};

type SharedPageProps = {
  folder: FolderContents;
};

export default function SharedPage(props: a) {
  const data = props.data;
  console.log(data);
  // const [data, isLoading] = useFetchData(getShareFolderData);
  return (
    <SearchProvider>
      <ShareNav />
      <Header data={data} />
      <SearchBar />
      <ImageList data={data} />
      <Footer />
    </SearchProvider>
  );
}

export async function getStaticProps() {
  const response = await getShareFolderData();
  return {
    props: {
      data: response,
    },
  };
}
