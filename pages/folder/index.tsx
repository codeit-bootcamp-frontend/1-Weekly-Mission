import { useGetFolders } from "folder/data-access-folder";
import { useGetLinks } from "link/data-access-link";
import { Layout } from "sharing/feature-layout";
import { FolderLayout } from "page-layout/FolderLayout";
import { FolderToolBar } from "folder/feature-folder-tool-bar";
import { SearchBar } from "link/ui-search-bar";
import { useState } from "react";
import { ALL_LINKS_ID } from "link/data-access-link/constant";
import { LinkForm } from "link/feature-link-form";
import { CardList } from "link/feature-card-list";
import { SelectedFolderId } from "folder/type";
import { useSearchLink } from "link/util-search-link/useSearchLink";
import { useIntersectionObserver } from "sharing/util/useIntersectionObserver";

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
