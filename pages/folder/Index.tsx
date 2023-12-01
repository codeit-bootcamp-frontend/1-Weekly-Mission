import { useGetFolders } from "@/components/folder/data-access-folder";
import { useGetLinks } from "@/components/link/data-access-link";
import { Layout } from "@/components/sharing/feature-layout";
import { FolderLayout } from "@/components/page-layout/FolderLayout";
import { FolderToolBar } from "@/components/folder/feature-folder-tool-bar";
import { SearchBar } from "@/components/link/ui-search-bar";
import { useState } from "react";
import { ALL_LINKS_ID } from "@/components/link/data-access-link/constant";
import { LinkForm } from "@/components/link/feature-link-form";
import { CardList } from "@/components/link/feature-card-list";
import { SelectedFolderId } from "@/components/folder/type";
import { useSearchLink } from "@/components/link/util-search-link/useSearchLink";
import { useIntersectionObserver } from "@/components/sharing/util/useIntersectionObserver";

const FolderPage = () => {
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

export default FolderPage;
