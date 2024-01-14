import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import CardList from "@/components/cardList/CardList";
import FolderAddBar from "@/components/folderAddBar/FolderAddBar";
import FolderSearchBar from "@/components/folderSearchBar/FolderSearchBar";
import FolderTabBar from "@/components/folderTabBar/FolderTabBar";
import FolderToolbar from "@/components/folderToolBar/FolderToolBar";
import WithAuth from "@/components/hocs/WithAuth";
import { ALL_LINKS_ID } from "@/constants/constants";
import * as S from "@/layouts/folder/Folder.style";
import { Folder, Link } from "@/types/type";
import { getFolders, getLinks } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const FolderLayout = () => {
  const { data: folders } = useQuery({
    queryKey: ["folders"],
    queryFn: getFolders,
    staleTime: 60 * 1000 * 3,
    gcTime: 60 * 1000 * 3,
  });
  const router = useRouter();
  const [selectedFolderId, setSelectedFolderId] = useState("");

  const { data: links, isPending } = useQuery({
    queryKey: ["links", selectedFolderId],
    queryFn: () => getLinks(selectedFolderId),
    enabled: !!selectedFolderId,
    staleTime: 60 * 1000 * 3,
    gcTime: 60 * 1000 * 3,
  });

  useEffect(() => {
    if (router.isReady) {
      const folderIdFromQuery = router.query.folderId as string;
      setSelectedFolderId(folderIdFromQuery?.toString() || ALL_LINKS_ID);
    }
  }, [router.isReady, router.query.folderId]);

  const [searchQuery, setSearchQuery] = useState("");
  const filteredLinks = searchQuery
    ? links?.filter(
        (link: Link) =>
          link?.url?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link?.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link?.title?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : links;

  const folderName = folders?.find((folder: Folder) => folder.id === +selectedFolderId)?.name || "전체";

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
          {isPending || !filteredLinks ? (
            <LoadingSpinner />
          ) : (
            <>
              <FolderSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <FolderTabBar folders={folders} selectedFolderId={selectedFolderId} />
              <FolderToolbar folderName={folderName} folderId={selectedFolderId} />
              <CardList links={filteredLinks} folders={folders} isShared={false} folderId={selectedFolderId} />
            </>
          )}
        </S.FolderPage>
      </S.FolderPageWrap>
      <div ref={footerRef} style={{ height: "1px", position: "absolute", bottom: "0" }}></div>
    </>
  );
};

export default WithAuth(FolderLayout);
