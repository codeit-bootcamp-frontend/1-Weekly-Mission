import { useGetFolder } from "@/src/folder/data-access-folder";
import { Layout } from "@/src/sharing/feature-layout";
import { SharedLayout } from "@/src/page-layout/SharedLayout";
import { CardList } from "@/src/link/ui-card-list";
import { FolderInfo } from "@/src/folder/ui-folder-info";
import { ReadOnlyCard } from "@/src/link/ui-read-only-card";
import { SearchBar } from "@/src/link/ui-search-bar";
import { useSearchLink } from "@/src/link/util-search-link/useSearchLink";

const SharedPage = () => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};
  const { searchValue, handleChange, handleCloseClick, result } = useSearchLink(links);

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo profileImage={profileImage} ownerName={ownerName} folderName={folderName} />
        }
        searchBar={
          <SearchBar value={searchValue} onChange={handleChange} onCloseClick={handleCloseClick} />
        }
        cardList={
          <CardList>
            {result?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};

export default SharedPage;
