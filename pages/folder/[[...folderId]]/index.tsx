import { useGetFolders } from "@/src/folder/data-access-folder";
import { useGetLinks } from "@/src/link/data-access-link";
import { Layout } from "@/src/sharing/feature-layout";
import { FolderLayout } from "@/src/page-layout/FolderLayout";
import { FolderToolBar } from "@/src/folder/feature-folder-tool-bar";
import { SearchBar } from "@/src/link/ui-search-bar";
import { ALL_LINKS_ID } from "@/src/link/data-access-link/constant";
import { LinkForm } from "@/src/link/feature-link-form";
import { CardList } from "@/src/link/feature-card-list";
import { useSearchLink } from "@/src/link/util-search-link";
import { ROUTE, useIntersectionObserver } from "@/src/sharing/util";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

const FolderPage = () => {
  const router = useRouter();
  const { folderId } = router.query;
  const currentFolderId = useMemo(() => {
    if (router.isReady) {
      return folderId?.[0] ? parseInt(folderId?.[0]) : ALL_LINKS_ID;
    }
    return undefined;
  }, [router.isReady, folderId]);
  const { data: folders } = useGetFolders();
  const { data: links, loading } = useGetLinks(currentFolderId);
  const { searchValue, handleChange, handleCloseClick, result } = useSearchLink(links);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.replace(ROUTE.로그인);
    }
  }, [router]);

  return (
    <Layout isSticky={false} footerRef={ref}>
      <FolderLayout
        linkForm={<LinkForm hideFixedLinkForm={isIntersecting} />}
        searchBar={
          <SearchBar value={searchValue} onChange={handleChange} onCloseClick={handleCloseClick} />
        }
        folderToolBar={<FolderToolBar folders={folders} selectedFolderId={currentFolderId} />}
        cardList={loading ? null : <CardList links={result} />}
      />
    </Layout>
  );
};

export default FolderPage;
