import React, { useState } from "react";
import { useGetFolder } from "folder/data-access-folder";
import { Layout } from "sharing/feature-layout";
import { SharedLayout } from "page-layout/SharedLayout";
import { CardList } from "link/ui-card-list";
import { FolderInfo } from "folder/ui-folder-info";
import { ReadOnlyCard } from "link/ui-read-only-card";
import { SearchBar } from "link/ui-search-bar";

interface Link {
  id: string;
  url: string;
  imageSource?: string;
  alt: string;
  elapsedTime: string;
  description?: string;
  createdAt: string;
  title: string;
}

interface FolderData {
  profileImage?: string;
  ownerName?: string;
  folderName: string;
  links: Link[];
}

export const SharedPage = () => {
  const { data } = useGetFolder();
  const [searchTerm, setSearchTerm] = useState("");

  const folderData = data as FolderData | undefined;

  const {
    profileImage = "",
    ownerName = "",
    folderName = "",
    links = [],
  } = folderData || {};

  const filteredLinks = searchTerm
    ? links.filter(
        (link: Link) =>
          (link.url && link.url.includes(searchTerm)) ||
          (link.description && link.description.includes(searchTerm))
      )
    : links;

  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue);
  };

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        searchBar={<SearchBar onSearch={handleSearch} />}
        cardList={
          <CardList>
            {filteredLinks.map((link) => (
              <ReadOnlyCard
                key={link.id}
                {...link}
                imageSource={link.imageSource || ""}
              />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};
