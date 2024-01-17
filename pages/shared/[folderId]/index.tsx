import { useGetFolder } from "@/src/folder/data-access-folder";
import { Layout } from "@/src/sharing/feature-layout";
import { SharedLayout } from "@/src/page-layout/SharedLayout";
import { CardList } from "@/src/link/ui-card-list";
import { FolderInfo } from "@/src/folder/ui-folder-info";
import { ReadOnlyCard } from "@/src/link/ui-read-only-card";
import { SearchBar } from "@/src/link/ui-search-bar";
import { useSearchLink } from "@/src/link/util-search-link/useSearchLink";
import { useRouter } from "next/router";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import fetcher from "@/src/sharing/util/axiosInstance";
import { Folder, Return_folder } from "@/src/folder/type";
import { UserRawData } from "@/src/user/type";
import { LinkRawData } from "@/src/link/type";
import { mapLinksData } from "@/src/link/util-map";
import { GetServerSidePropsContext } from "next";
import { getAccessTokenFromCookie } from "@/utils/getAccessToken";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { folderId } = context.query;
  const accessToken = getAccessTokenFromCookie(context);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["folder", folderId],
    queryFn: () =>
      fetcher<Return_folder[]>({
        url: `folders/${folderId}`,
        method: "GET",
        headers: {
          Authorization: accessToken,
        },
      }),
  });

  const fetchedFolder = queryClient.getQueryData(["folder", folderId]);

  const folder = fetchedFolder?.data?.[0];
  const userId = folder?.user_id;

  await queryClient.prefetchQuery({
    queryKey: ["currentUser", userId],
    queryFn: () =>
      fetcher<UserRawData[]>({ method: "get", url: `users/${userId}` }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["links", folderId],
    queryFn: () =>
      fetcher<LinkRawData[]>({
        url: `/folders/${folderId}/links`,
        method: "GET",
      }),
  });

  return { props: { dehydratedState: dehydrate(queryClient) } };
}
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
    queryKey: ["currentUser", userId],
    queryFn: () =>
      fetcher<UserRawData[]>({ method: "get", url: `users/${userId}` }),
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
