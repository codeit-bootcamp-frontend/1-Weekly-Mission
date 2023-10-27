import React from "react";
import NavSec from "../components/nav/NavSec";
import Header from "../components/header/Header";
import SearchBar from "../components/searchBar/SearchBar";
import Menubar from "../components/menuBar/Menubar";
import LinksData from "../components/linksdata/LinksData";
import WholeData from "../components/linksdata/WholeData";

import useFetch from "../hooks/useFetch";

export default function FolderPage({ id }) {
  const [data, isLoading] = useFetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );

  return (
    <div>
      <NavSec />
      <Header />
      <SearchBar />
      <Menubar data={data} isLoading={isLoading} />
      <LinksData data={data} isLoading={isLoading} />
      <WholeData />
    </div>
  );
}
