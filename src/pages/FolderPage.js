import React from "react";
import FolderNav from "../components/nav/FolderNav";
import Header from "../common/header/Header";
import SearchBar from "../common/searchBar/SearchBar";
import Footer from "../common/footer/Footer";
import Menubar from "../components/menuBar/Menubar";
import WholeData from "../components/linksdata/WholeData";
import LocaleContext from "../contexts/LocaleContext";
import { useParams } from "react-router-dom";
import {
  fetchUserData,
  fetchUserFolderData,
  fetchUserLinks,
} from "../api/users";
import FolderMenu from "../components/menuBar/FolderMenu";

import useTest from "../hooks/useTest";

export default function FolderPage() {
  const USER_ID = 1;
  const paramId = useParams();
  // console.log("나는야 파람", paramId);
  // const [userData] = useUserFetch({ userId: 1 });
  // const [data, isLoading] = useUserFolderFetch({ userId: 1 });

  const [userData] = useTest(() => fetchUserData({ userId: USER_ID }));
  const [data, isLoading] = useTest(() =>
    fetchUserFolderData({ userId: USER_ID })
  );

  const [a, b] = useTest(() => fetchUserLinks({ userId: USER_ID }));

  const result = data?.data;

  const obj =
    (result &&
      result.reduce((acc, item) => {
        if (!acc[item.id]) {
          acc[item.id] = {
            folderId: item.id,
            folderName: item.name,
          };
        }
        return acc;
      }, {})) ||
    {};

  const obj_keys = Object.keys(obj).map(Number);

  return (
    <LocaleContext.Provider value={obj}>
      <FolderNav data={userData} />
      <Header />
      <SearchBar />
      <Menubar obj={obj} objKeys={obj_keys} />
      <FolderMenu folderId={paramId.folderId} />
      {/* <Landing data={data} isLoading={isLoading} key={key} /> */}
      {/* <Landing data={data} isLoading={isLoading}></Landing> */}
      <WholeData />
      <Footer />
    </LocaleContext.Provider>
  );
}
