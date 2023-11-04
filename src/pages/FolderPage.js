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
import useUserLinks from "../hooks/useUserLinks";
import { useUserTotalLinks } from "../hooks/useUserLinks";

export default function FolderPage() {
  const USER_ID = 1;
  const { folderId } = useParams();

  const [userData] = useTest(() => fetchUserData({ userId: USER_ID }));
  // const [userData] = useUserFetch({ userId: 1 });
  // const [data, isLoading] = useUserFolderFetch({ userId: 1 });

  const [Folderdata, isLoading] = useTest(() =>
    fetchUserFolderData({ userId: USER_ID })
  );

  // 각 폴더에 있는 (전체를 제외한, 아이템 리스트 가져오기)
  const [linkData, isLoading2] = useUserLinks({
    userId: USER_ID,
    folderId: folderId,
  });

  // const linksData = fetchUserLinks({ userId: USER_ID, folderId: folderId });
  // 아래는 왜 안될까.. folderId는 잘 나오는데, folderId에 대하 데이터가 안뽑힘..?
  // const [a, b] = useTest(() =>
  //   fetchUserLinks({ userId: USER_ID, folderId: folderId }, [folderId])
  // );

  const result = Folderdata?.data;
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
    <LocaleContext.Provider
      value={{ ObjectValue: obj, LinkSDataArr: linkData }}
    >
      <FolderNav data={userData} />
      <Header />
      <SearchBar />
      <Menubar obj={obj} objKeys={obj_keys} folderId={folderId} />
      <FolderMenu folderId={folderId} />
      {/* <Landing data={data} isLoading={isLoading} key={key} /> */}
      {/* <Landing data={data} isLoading={isLoading}></Landing> */}
      {/* <WholeData folderId={folderId} /> */}
      <WholeData linksData={linkData} folderId={folderId} />
      <Footer />
    </LocaleContext.Provider>
  );
}
