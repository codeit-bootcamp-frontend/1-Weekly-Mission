import { useGetFolder } from "folder/data-access-folder";
import { Layout } from "sharing/feature-layout";
import { SharedLayout } from "page-layout/SharedLayout";
import { CardList } from "link/ui-card-list";
import { FolderInfo } from "folder/ui-folder-info";
import { ReadOnlyCard } from "link/ui-read-only-card";
import { SearchBar } from "link/ui-search-bar";

export const SharedPage = () => {
  const { data } = useGetFolder();
  // if (!data) return null;

  // const {
  //   profileImage = "",
  //   ownerName = "",
  //   folderName = "",
  //   links = [],
  // } = data || {};

  return (
    <Layout>
      {data && (
        <SharedLayout
          folderInfo={
            <FolderInfo
              profileImage={data?.profileImage}
              ownerName={data?.ownerName}
              folderName={data?.folderName}
            />
          }
          // elapsedTime
          searchBar={<SearchBar />}
          cardList={
            <CardList>
              {data?.links?.map((link) => (
                <ReadOnlyCard key={link?.id} {...link} />
              ))}
            </CardList>
          }
        />
      )}
    </Layout>
  );
};
