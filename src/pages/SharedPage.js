import ShareNav from "../components/nav/ShareNav";
import Header from "../common/header/Header";
import Landing from "../components/landing/Landing";
import Footer from "../common/footer/Footer";
import SearchBar from "../common/searchBar/SearchBar";
import Profile from "../common/profile/Profile";
import useFetch from "../hooks/useFetch";

import React from "react";
import { useQueryClient } from "react-query";

export default function SharedPage() {
  const response = useFetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const [data, isLoading] = response;

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
