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

export const FolderPage = () => {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(ALL_LINKS_ID);
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
  return (
    <Layout isSticky={false}>
      <FolderLayout
        linkForm={<LinkForm folders={folders} />}
        searchBar={<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
        folderToolBar={
          <FolderToolBar folders={folders} selectedFolderId={selectedFolderId} onFolderClick={setSelectedFolderId} />
        }
        cardList={loading ? null : <CardList folders={folders} links={filteredLinks} />}
      />
    </Layout>
  );
};
