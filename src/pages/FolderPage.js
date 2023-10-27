import React from "react";
import NavSec from "../components/nav/NavSec";
import Header from "../components/header/Header";
import SearchBar from "../components/searchBar/SearchBar";
import Menubar from "../components/menuBar/Menubar";
import LinksData from "../components/linksdata/LinksData";
import WholeData from "../components/linksdata/WholeData";

import useFetch from "../hooks/useFetch";
import Landing from "../components/landing/Landing";

export default function FolderPage({ userId }) {
  const [data, isLoading] = useFetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );

  const key = "Folder";
  // const [data, isLoading] = useFetch(
  //   `https://bootcamp-api.codeit.kr/api/users/${userId}/folders`
  // );

  // context로 key를 던줘져서 landing으로 나눠보자

  return (
    <div>
      <NavSec />
      <Header />
      <SearchBar />
      <Menubar data={data} isLoading={isLoading} />
      {/* <Landing data={data} isLoading={isLoading} key={key} /> */}
      <LinksData data={data} isLoading={isLoading} />
      <WholeData />
    </div>
  );
}
