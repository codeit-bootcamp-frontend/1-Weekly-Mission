import {
  useGetFolder,
  useGetSampleFolder,
} from "@/src/folder/data-access-folder";
import { Layout } from "@/src/sharing/feature-layout";
import { SharedLayout } from "@/src/page-layout/SharedLayout";
import { CardList } from "@/src/link/ui-card-list";
import { FolderInfo } from "@/src/folder/ui-folder-info";
import { ReadOnlyCard } from "@/src/link/ui-read-only-card";
import { SearchBar } from "@/src/link/ui-search-bar";
import { useSearchLink } from "@/src/link/util-search-link/useSearchLink";
import { useRouter } from "next/router";
import { useGetUser } from "@/src/user/data-access-user/useGetUser";
import { useGetSharedLinks } from "@/src/link/data-access-link";

const SharedPage = () => {
  const router = useRouter();
  const { folderId } = router.query;
  const { data: folder } = useGetFolder(folderId as string);
  const { data: owner } = useGetUser(folder.userId);
  const { data: links } = useGetSharedLinks(folder.userId, folderId as string);

  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={owner.imageSource}
            ownerName={owner.name}
            folderName={folder.name}
          />
        }
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
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
