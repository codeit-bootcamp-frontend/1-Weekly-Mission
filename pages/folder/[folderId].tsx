import FolderAddBar from "@/components/folderAddBar/FolderAddBar";
import FolderSearchBar from "@/components/folderSearchBar/FolderSearchBar";
import FolderTabBar from "@/components/folderTabBar/FolderTabBar";
import FolderToolbar from "@/components/folderToolBar/FolderToolBar";
import { useGetLinks } from "@/hooks/useGetLinks";
import { useGetFolders } from "@/hooks/useGetFolders";
import * as S from "@/layouts/folder/Folder.style";
import React, { useEffect, useRef, useState } from "react";
import CardList from "@/components/cardList/CardList";
import { useRouter } from "next/router";
import { ALL_LINKS_ID } from "@/constants/constants";
import Head from "next/head";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

const FolderLayout = () => {
  const { data: folders } = useGetFolders();
  const router = useRouter();
  const selectedFolderId = (router.query.folderId as string) || ALL_LINKS_ID;
  const { data: links, loading } = useGetLinks(selectedFolderId);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredLinks = searchQuery
    ? links.filter(
        (link) =>
          link?.url?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link?.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link?.title?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : links;

  const folderName = folders?.find((folder) => folder.id === +selectedFolderId)?.name || "전체";

  const [isSticky, setIsSticky] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const footerRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === footerRef.current) {
            setIsFooterVisible(entry.isIntersecting);
          } else if (entry.target === topRef.current) {
            setIsSticky(!entry.isIntersecting);
          }
        });
      },
      { threshold: [1, 1], rootMargin: "50px" }
    );

    if (topRef.current) {
      observer.observe(topRef.current);
    }

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isFooterVisible]);

  return (
    <>
      <Head>
        <title>{`${folderName} - Linkbrary`}</title>
      </Head>
      <FolderAddBar isHidden={isFooterVisible} isSticky={isSticky} folders={folders} />
      <S.FolderPageWrap>
        <div ref={topRef} style={{ height: "1px", position: "absolute", top: "0" }}></div>
        <S.FolderPage>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <FolderSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <FolderTabBar folders={folders} selectedFolderId={selectedFolderId} />
              <FolderToolbar folderName={folderName} />
              <CardList links={filteredLinks} folders={folders} isShared={false} />
            </>
          )}
        </S.FolderPage>
      </S.FolderPageWrap>
      <div ref={footerRef} style={{ height: "1px", position: "absolute", bottom: "0" }}></div>
    </>
  );
};

export default FolderLayout;
