import { useGetFolder } from "@/src/folder/data-access-folder";
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
import { useQuery } from "@tanstack/react-query";
import fetcher from "@/src/sharing/util/axiosInstance";
import { Folder, Return_folder } from "@/src/folder/type";
import { UserRawData } from "@/src/user/type";
import isDefined from "@/utils/isDefined";
import { LinkRawData } from "@/src/link/type";
import { mapLinksData } from "@/src/link/util-map";

const SharedPage = () => {
  const router = useRouter();
  const { folderId } = router.query;

  const fetchedFolder = useQuery({
    queryKey: ["folder", folderId],
    queryFn: () =>
      fetcher<Return_folder[]>({
        url: `folders/${folderId}`,
        method: "GET",
      }),
  });

  const folder = fetchedFolder?.data?.data[0];

  const userId = folder?.user_id;

  const fetchedOwner = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetcher<UserRawData[]>({ url: `users/${userId}` }),
  });

  const owner = fetchedOwner.data?.data?.[0];

  const fetchedLinks = useQuery({
    queryKey: ["links", folderId],
    queryFn: () =>
      fetcher<LinkRawData[]>({
        url: `/folders/${folderId}/links`,
        method: "GET",
      }),
  });

  const links = fetchedLinks.data?.data.map(mapLinksData) ?? [];

  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={owner?.image_source}
            ownerName={owner?.name}
            folderName={folder?.name}
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
