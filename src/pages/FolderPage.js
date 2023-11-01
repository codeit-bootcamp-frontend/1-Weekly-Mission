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
  // const paramId = useParams();
  const { folderId } = useParams();

  // 우선 전체버튼은 {}
  // 즐겨찾기는 아무것도 X
  // 유용한 글은  (6)  {folderId: '16'}
  // 나만의 장소 아무것도 X
  // 채용 사이트는 {folderId: '40'}
  // 고딩 팁은 아무것도 X

  const [userData] = useTest(() => fetchUserData({ userId: USER_ID }));
  // const [userData] = useUserFetch({ userId: 1 });
  // const [data, isLoading] = useUserFolderFetch({ userId: 1 });

  const [data, isLoading] = useTest(() =>
    fetchUserFolderData({ userId: USER_ID })
  );

  // userId, folderId 두개 받는다...
  const [a, b] = useTest(() => fetchUserLinks({ userId: USER_ID }));
  //  ?.의 앞의 평가 대상이 undefined이나 null이 면은 undefined를 반환
  // / 못해도 ? undefined
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
      <FolderMenu folderId={folderId} />
      {/* <Landing data={data} isLoading={isLoading} key={key} /> */}
      {/* <Landing data={data} isLoading={isLoading}></Landing> */}
      <WholeData folderId={folderId} />
      <Footer />
    </LocaleContext.Provider>
  );
}
