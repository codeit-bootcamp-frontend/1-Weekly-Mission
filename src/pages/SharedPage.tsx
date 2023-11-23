import { useGetFolder } from "folder/data-access-folder";
import { Layout } from "sharing/feature-layout";
import { SharedLayout } from "page-layout/SharedLayout";
import { CardList } from "link/ui-card-list";
import { FolderInfo } from "folder/ui-folder-info";
import { ReadOnlyCard } from "link/ui-read-only-card";
import { SearchBar } from "link/ui-search-bar";

export const SharedPage = () => {
  const { data } = useGetFolder();

  const folderData = data as
    | {
        profileImage?: string;
        ownerName?: string;
        folderName: string;
        links: {
          id: string;
          url: string;
          imageSource?: string;
          alt: string;
          elapsedTime: string;
          description?: string;
          createdAt: string;
        }[];
      }
    | undefined;

  const {
    profileImage = "",
    ownerName = "",
    folderName = "",
    links = [],
  } = folderData || {};

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
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {links.map((link) => (
              <ReadOnlyCard
                key={link.id}
                {...link}
                imageSource={link.imageSource || ""} // 'undefined'일 경우 기본값 제공
              />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};
