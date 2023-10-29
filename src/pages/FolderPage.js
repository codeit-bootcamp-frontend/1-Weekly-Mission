import React from "react";
import NavSec from "../components/nav/NavSec";
import Header from "../components/header/Header";
import SearchBar from "../components/searchBar/SearchBar";
import Menubar from "../components/menuBar/Menubar";
import WholeData from "../components/linksdata/WholeData";
import Footer from "../components/footer/Footer";
import useFetch from "../hooks/useFetch";
import Landing from "../components/landing/Landing";
import LocaleContext from "../contexts/LocaleContext";
import Article from "../components/article/Article";
import { useParams } from "react-router-dom";

export default function FolderPage() {
  const paramId = useParams();
  const [data, isLoading] = useFetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );

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

  // console.log(Object.keys(paramId));
  // const key = "Folder";
  // const [data, isLoading] = useFetch(
  //   `https://bootcamp-api.codeit.kr/api/users/${userId}/folders`
  // );

  // console.log(paramId.folderId);
  // const title = paramId.folderId;
  // console.log(paramId);

  return (
    <LocaleContext.Provider value={obj}>
      <NavSec />
      <Header />
      <SearchBar />
      <Menubar data={data} isLoading={isLoading} />
      {/* <Landing data={data} isLoading={isLoading} key={key} /> */}
      {/* title={title} */}
      <Article folderId={paramId.folderId} />
      <WholeData />
      <Footer />
    </LocaleContext.Provider>
  );
}
