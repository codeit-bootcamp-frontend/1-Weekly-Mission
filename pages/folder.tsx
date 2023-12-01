import { useState } from "react";
import { useGetFolders } from "@/pages/folder/data-access-folder/useGetFolders";
import { useGetLinks } from "@/pages/link/data-access-link/useGetLinks";
import { Layout } from "@/pages/sharing/feature-layout/Layout";
import { FolderLayout } from "@/pages/page-layout/FolderLayout/FolderLayout";
import { SearchBar } from "@/pages/link/ui-search-bar/SearchBar";
import { FolderToolBar } from "@/pages/folder/feature-folder-tool-bar/FolderToolBar";
import { SelectedFolderId } from "@/pages/folder/type";
import { useIntersectionObserver } from "@/pages/sharing/util/useIntersectionObserver";
import { useSearchLink } from "@/pages/link/util-search-link/useSearchLink";
import { ALL_LINKS_ID } from "@/pages/link/data-access-link/constant";
import { LinkForm } from "@/pages/link/feature-link-form/LinkForm";
import { CardList } from "@/pages/link/feature-card-list/CardList";

export const FolderPage = () => {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] =
    useState<SelectedFolderId>(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);
  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();

  return (
    <Layout isSticky={false} footerRef={ref}>
      <FolderLayout
        linkForm={<LinkForm hideFixedLinkForm={isIntersecting} />}
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={setSelectedFolderId}
          />
        }
        cardList={loading ? null : <CardList links={result} />}
      />
    </Layout>
  );
};
