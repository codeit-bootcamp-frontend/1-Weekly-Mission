import ShareNav from "../components/nav/ShareNav";
import Header from "../common/header/Header";
import Landing from "../components/landing/Landing";
import Footer from "../common/footer/Footer";
import SearchBar from "../common/searchBar/SearchBar";
import React from "react";
import useFetchData from "../hooks/useFetchData";
import { getShareDate } from "../api/folder";
export default function SharedPage() {
  const [data, isLoading] = useFetchData(() => getShareDate());

  return (
    <div>
      <ShareNav />
      <Header data={data} isLoading={isLoading} />
      <SearchBar />
      <Landing data={data} isLoading={isLoading} />
      <Footer />
    </div>
  );
}
