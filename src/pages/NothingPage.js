import React from "react";
import NavSec from "../components/nav/NavSec";
import Header from "../components/header/Header";
import useFetch from "../hooks/useFetch";
import SearchBar from "../components/searchBar/SearchBar";
import Footer from "../components/footer/Footer";
export default function NothingPage() {
  const [data, isLoading] = useFetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );

  return (
    <div>
      <NavSec />
      {/* <Header data={data} isLoading={isLoading} /> */}
      <SearchBar />
      <Footer />
    </div>
  );
}
