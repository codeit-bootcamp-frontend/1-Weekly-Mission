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

interface Link {
  url: string;
  title: string;
  description: string;
}

export const FolderPage = () => {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(ALL_LINKS_ID);
  const [searchTerm, setSearchTerm] = useState("");
  const selectedFolderIdString = selectedFolderId.toString();
  const { data: links, loading } = useGetLinks(selectedFolderIdString);

  const handleFolderClick = (folderId: string) => {
    setSelectedFolderId(folderId);
  };

  const filteredLinks = searchTerm
    ? links.filter(
        (link: Link) =>
          (link.url && link.url.includes(searchTerm)) ||
          (link.title && link.title.includes(searchTerm)) ||
          (link.description && link.description.includes(searchTerm))
      )
    : links;

  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue);
  };

  return (
    <Layout isSticky={false}>
      <FolderLayout
        linkForm={<LinkForm />}
        searchBar={<SearchBar onSearch={handleSearch} />}
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={handleFolderClick}
          />
        }
        cardList={loading ? null : <CardList links={filteredLinks} />}
      />
    </Layout>
  );
};
