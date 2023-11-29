import React from "react";
import useFetchData from "@/hooks/useFetchData";
import { getShareData } from "@/api/share";
import ShareNav from "@/components/nav/ShareNav";
import Header from "@/components/header/Header";
import SearchBar from "@/components/searchbar/SearchBar";
import ImageList from "@/components/imagelist/ImageList";
import Footer from "@/components/footer/Footer";

export default function SharedPage() {
  const [data, isLoading] = useFetchData(getShareData);

  return (
    !isLoading && (
      <div>
        <ShareNav />
        <Header data={data} isLoading={isLoading} />
        <SearchBar />
        <ImageList data={data} isLoading={isLoading} />
        <Footer />
      </div>
    )
  );
}
