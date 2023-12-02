import React, { useState } from "react";
import FolderSearchBar from "@/components/folderSearchBar/FolderSearchBar";
import SharedFolderInfo from "@/components/folderUserInfo/SharedFolderInfo";
import * as S from "@/layouts/shared/Shared.style";
import CardList from "@/components/cardList/CardList";
import useGetSampleFolder from "@/hooks/useGetSampleFolder";
import { MappedLink } from "@/types/type";
import Head from "next/head";

const SharedPage = () => {
  const { data } = useGetSampleFolder();

  const [searchQuery, setSearchQuery] = useState("");
  const filteredLinks: MappedLink[] = searchQuery
    ? (data?.links ?? []).filter(
        (link) =>
          link?.url?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link?.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link?.title?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : data?.links ?? [];

  return (
    <>
      <Head>
        <title>{`  ${data?.ownerName}님의 ${data?.folderName} 폴더 - Linkbrary`}</title>
      </Head>
      {data && (
        <SharedFolderInfo profileImage={data?.profileImage} ownerName={data?.ownerName} folderName={data?.folderName} />
      )}
      <S.SharedPageWrap>
        <S.SharedPage>
          <FolderSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <CardList links={filteredLinks} isShared={true} />
        </S.SharedPage>
      </S.SharedPageWrap>
    </>
  );
};

export default SharedPage;
