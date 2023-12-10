import { useGetFolders } from "@/src/folder/data-access-folder";
import { useGetLinks } from "@/src/link/data-access-link";
import { Layout } from "@/src/sharing/feature-layout";
import { FolderLayout } from "@/src/page-layout/FolderLayout";
import { FolderToolBar } from "@/src/folder/feature-folder-tool-bar";
import { SearchBar } from "@/src/link/ui-search-bar";
import { useState } from "react";
import { ALL_LINKS_ID } from "@/src/link/data-access-link/constant";
import { LinkForm } from "@/src/link/feature-link-form";
import { CardList } from "@/src/link/feature-card-list";
import { SelectedFolderId } from "@/src/folder/type";
import { useSearchLink } from "@/src/link/util-search-link";
import { useIntersectionObserver } from "@/src/sharing/util";

const FolderPage = () => {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState<SelectedFolderId>(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);
  const { searchValue, handleChange, handleCloseClick, result } = useSearchLink(links);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();

  return (
    <Layout isSticky={false} footerRef={ref}>
      <FolderLayout
        linkForm={<LinkForm hideFixedLinkForm={isIntersecting} />}
        searchBar={
          <SearchBar value={searchValue} onChange={handleChange} onCloseClick={handleCloseClick} />
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
