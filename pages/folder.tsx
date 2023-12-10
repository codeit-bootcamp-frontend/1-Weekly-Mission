import { useState, useEffect } from "react";

import Header from "@/components/layout/Header";
import HeroContainer from "@/components/HeroContainer";
import LinkAdderButton from "@/components/LinkAdderButton";
import Search from "@/components/Search";
import FolderNav from "@/components/FolderNav";
import Footer from "@/components/layout/Footer";

import { getFolderList, getFolderLinks } from "@/utils/getUserFolderData";
import { UserDataProps, UserFolderList, UserFolerLinks } from "@/lib/Type";
import CardList from "@/components/CardList";

export default function FolderPage({ userData }: UserDataProps) {
  const [currentFolderID, setCurrentFolderID] = useState<number>(0);
  const [uFolderList, setUFolderList] = useState<UserFolderList>({
    data: [],
  });
  const [uFolderLinks, setUFolderLinks] = useState<UserFolerLinks>({
    data: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res_ulist = await getFolderList(userData?.id);
        setUFolderList(res_ulist);
        const res_ulinks = await getFolderLinks(userData?.id, 0);
        setUFolderLinks(res_ulinks);
      } catch (error) {
        throw new Error(
          "INIT : 사용자 폴더리스트, 전체 링크 정보 가져오기 실패"
        );
      }
    };

    fetchData();
  }, [userData?.id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res_ulinks = await getFolderLinks(userData?.id, currentFolderID);
        setUFolderLinks(res_ulinks);
      } catch (error) {
        throw new Error("UPDATE : 사용자 폴더링크 정보 가져오기 실패");
      }
    };

    fetchData();
  }, [userData?.id, currentFolderID]);

  return (
    <>
      <Header userData={userData}></Header>
      <HeroContainer>
        <LinkAdderButton></LinkAdderButton>
      </HeroContainer>
      <Search></Search>
      <FolderNav
        folders={uFolderList?.data}
        setCurrentFolderID={setCurrentFolderID}
      />
      <CardList links={uFolderLinks?.data}></CardList>
      <Footer></Footer>
    </>
  );
}
