import { useState, useEffect } from "react";

import Layout from "../layout/Layout";
import HeroContainer from "../layout/HeroContainer";
import FolderInfo from "../components/FolderInfo";
import Search from "../components/Search";
import CardList from "../components/CardList";

import getUserData from "../api/getUserData";
import getSharedFolderData from "../api/getSharedFolderData";

import "../styles/shared.css";

function SharedPage() {
  const [userData, setUserData] = useState({});
  const [folderData, setFolderData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res_user = await getUserData();
        const res_folder = await getSharedFolderData();
        setUserData(res_user);
        setFolderData(res_folder);
      } catch (error) {
        throw new Error("사용자 계정 정보, 폴더 정보 가져오기 실패");
      }
    };

    fetchData();
  }, []);

  return (
    <Layout userData={userData}>
      <HeroContainer>
        <FolderInfo folder={folderData?.folder}></FolderInfo>
      </HeroContainer>
      <Search></Search>
      <CardList folderArray={folderData.folder?.links}></CardList>
    </Layout>
  );
}

export default SharedPage;
