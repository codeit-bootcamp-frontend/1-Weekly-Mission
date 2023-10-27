import React, { useEffect, useState } from "react";
import NavSec from "../components/nav/NavSec";
import Header from "../components/header/Header";
import SearchBar from "../components/searchBar/SearchBar";
import Menubar from "../components/menuBar/Menubar";
import LinksData from "../components/linksdata/LinksData";
import WholeData from "../components/linksdata/WholeData";

import useFetch from "../hooks/useFetch";
import Landing from "../components/landing/Landing";
import LocaleContext from "../contexts/LocaleContext";
import { getEachfoldersData } from "../api/folder";

export default function FolderPage({ userId }) {
  const [data, isLoading] = useFetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );
  const [objArr, setObjArr] = useState({});

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

  // context로 key를 던줘져서 landing으로 나눠보자

  // value
  return (
    <LocaleContext.Provider value={obj}>
      <div>
        <NavSec />
        <Header />
        <SearchBar />
        <Menubar data={data} isLoading={isLoading} />
        {/* <Landing data={data} isLoading={isLoading} key={key} /> */}
        <WholeData />
        <LinksData />
      </div>
    </LocaleContext.Provider>
  );
}
