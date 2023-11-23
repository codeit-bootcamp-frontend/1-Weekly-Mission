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

  // selectedFolderId를 string으로 변환
  const selectedFolderIdString = selectedFolderId.toString();

  // useGetLinks에 string 타입으로 변환된 selectedFolderIdString을 전달
  const { data: links, loading } = useGetLinks(selectedFolderIdString);

  const handleFolderClick = (folderId: string) => {
    setSelectedFolderId(folderId);
  };

  return (
    <Layout isSticky={false}>
      <FolderLayout
        linkForm={<LinkForm />}
        searchBar={<SearchBar />}
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={handleFolderClick}
          />
        }
        cardList={loading ? null : <CardList links={links} />}
      />
    </Layout>
  );
};
