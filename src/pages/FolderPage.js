import React from "react";
import FolderNav from "../components/nav/FolderNav";
import Header from "../common/header/Header";
import SearchBar from "../common/searchBar/SearchBar";
import Footer from "../common/footer/Footer";
import Menubar from "../components/menuBar/Menubar";
import WholeData from "../components/linksdata/WholeData";

import useUserFolderFetch from "../hooks/userUserFolderFetch";
import LocaleContext from "../contexts/LocaleContext";

import { useParams } from "react-router-dom";

import { fetchUserData, fetchUserFolderData } from "../api/users";
import FolderMenu from "../components/menuBar/FolderMenu";
import useUserFetch from "../hooks/useUserFetch";
import useTest from "../hooks/useTest";

export default function FolderPage() {
  const USER_ID = 1;
  const paramId = useParams();
  const [userData] = useTest(() => fetchUserData({ userId: USER_ID }));

  // const [userData] = useUserFetch({ userId: 1 });
  // const [data, isLoading] = useUserFolderFetch({ userId: 1 });

  const [data, isLoading] = useTest(() =>
    fetchUserFolderData({ userId: USER_ID })
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

  return (
    <LocaleContext.Provider value={obj}>
      <FolderNav data={userData} />
      <Header />
      <SearchBar />
      <Menubar data={data} isLoading={isLoading} />
      <FolderMenu folderId={paramId.folderId} />
      {/* <Landing data={data} isLoading={isLoading} key={key} /> */}
      {/* <Landing data={data} isLoading={isLoading}></Landing> */}
      <WholeData />
      <Footer />
    </LocaleContext.Provider>
  );
}
