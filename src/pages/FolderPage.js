import React, { useEffect, useState } from "react";
import NavSec from "../components/nav/NavSec";
import Header from "../components/header/Header";
import SearchBar from "../components/searchBar/SearchBar";
import Menubar from "../components/menuBar/Menubar";
import WholeData from "../components/linksdata/WholeData";
import Footer from "../components/footer/Footer";

import useFetch from "../hooks/useFetch";
import Landing from "../components/landing/Landing";
import LocaleContext from "../contexts/LocaleContext";
import { useParams } from "react-router-dom";
import Article from "../components/article/Article";

export default function FolderPage() {
  const [data, isLoading] = useFetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );

  // const { folderId } = useParams();
  // console.log(folderId);
  const result = data?.data;
  const obj = {};
  let obj_keys = [];

  result &&
    result.forEach((item) => {
      obj[item.id] = {
        folderId: item.id,
        folderName: item.name,
      };
      obj_keys.push(item.id);
    });

  // const key = "Folder";
  // const [data, isLoading] = useFetch(
  //   `https://bootcamp-api.codeit.kr/api/users/${userId}/folders`
  // );

  return (
    <LocaleContext.Provider value={obj}>
      <div>
        <NavSec />
        <Header />
        <SearchBar />
        <Menubar data={data} isLoading={isLoading} />
        {/* <Landing data={data} isLoading={isLoading} key={key} /> */}
        <Article />
        <WholeData />
        <Footer />
      </div>
    </LocaleContext.Provider>
  );
}
