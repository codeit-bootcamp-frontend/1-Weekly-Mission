import { useState, useEffect } from "react";

import HeroContainer from "@/components/HeroContainer";
import FolderInfo from "@/components/FolderInfo";
import Search from "@/components/Search";
import CardList from "@/components/CardList";

import getSharedFolderData from "@/utils/getSharedFolderData";

import { UserData, SharedFolderData, UserDataProps } from "@/lib/Type";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

function SharedPage({ userData }: UserDataProps) {
  const [sFolderData, setSFolderData] = useState<SharedFolderData>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res_sfolder = await getSharedFolderData();
        setSFolderData(res_sfolder);
      } catch (error) {
        throw new Error("공유 폴더 정보 가져오기 실패");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header userData={userData}></Header>
      <HeroContainer>
        <FolderInfo folder={sFolderData?.folder}></FolderInfo>
      </HeroContainer>
      <Search></Search>
      <CardList links={sFolderData.folder?.links}></CardList>
      <Footer></Footer>
    </>
  );
}

export default SharedPage;
