import { useGetFolder } from "folder/data-access-folder";
import { Layout } from "sharing/feature-layout";
import { SharedLayout } from "page-layout/SharedLayout";
import { CardList } from "link/ui-card-list";
import { FolderInfo } from "folder/ui-folder-info";
import { ReadOnlyCard } from "link/ui-read-only-card";
import { SearchBar } from "link/ui-search-bar";

export const SharedPage = () => {
  const { data } = useGetFolder();

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          data && (
            <FolderInfo profileImage={data?.profileImage} ownerName={data?.ownerName} folderName={data?.folderName} />
          )
        }
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {data?.links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};
