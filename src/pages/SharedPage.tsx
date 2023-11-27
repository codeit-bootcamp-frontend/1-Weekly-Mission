import { useGetFolder } from "folder/data-access-folder";
import { Layout } from "sharing/feature-layout";
import { SharedLayout } from "page-layout/SharedLayout";
import { CardList } from "link/ui-card-list";
import { FolderInfo } from "folder/ui-folder-info";
import { ReadOnlyCard } from "link/ui-read-only-card";
import { SearchBar } from "link/ui-search-bar";
import { useState } from "react";
import { MappedLink } from "folder/util-map";

export const SharedPage = () => {
  const { data } = useGetFolder();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLinks: MappedLink[] = searchQuery
    ? (data?.links ?? []).filter(
        (link) =>
          link?.url?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link?.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link?.title?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : data?.links ?? [];
  return (
    <Layout>
      <SharedLayout
        folderInfo={
          data && (
            <FolderInfo profileImage={data?.profileImage} ownerName={data?.ownerName} folderName={data?.folderName} />
          )
        }
        searchBar={<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
        cardList={
          <CardList>
            {filteredLinks.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};
