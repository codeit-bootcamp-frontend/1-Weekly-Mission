import { Layout } from "@/src/sharing/feature-layout";
import { FolderLayout } from "@/src/page-layout/FolderLayout";
import { FolderToolBar } from "@/src/folder/feature-folder-tool-bar";
import { SearchBar } from "@/src/link/ui-search-bar";
import { ALL_LINKS_ID } from "@/src/link/data-access-link/constant";
import { LinkForm } from "@/src/link/feature-link-form";
import { CardList } from "@/src/link/feature-card-list";
import { useSearchLink } from "@/src/link/util-search-link";
import { useIntersectionObserver } from "@/src/sharing/util";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { getAccessTokenFromCookie } from "@/utils/getAccessToken";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { Folder } from "@/src/folder/type";
import { LinkRawData } from "@/src/link/type";
import { mapLinksData } from "@/src/link/util-map";
import fetcher from "@/src/sharing/util/axiosInstance";
import { UserRawData } from "@/src/user/type";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const accessToken = getAccessTokenFromCookie(context);

  if (!accessToken) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
    };
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["folders"],
    queryFn: () =>
      fetcher<Folder[]>({
        method: "get",
        url: "/folders",
        headers: {
          Authorization: accessToken,
        },
      }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["me"],
    queryFn: () => fetcher<UserRawData[]>({ url: "/users", method: "GET" }),
  });

  return {
    props: {
      accessToken,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function FolderPage() {
  const router = useRouter();
  const { folderId } = router.query;
  const currentFolderId = useMemo(() => {
    if (router.isReady) {
      return folderId?.[0] ? parseInt(folderId?.[0]) : ALL_LINKS_ID;
    }
    return undefined;
  }, [router.isReady, folderId]);

  // 폴더들 가져오는 쿼리
  const folderList = useQuery({
    queryKey: ["folders"],
    queryFn: () =>
      fetcher<Folder[]>({
        method: "get",
        url: "/folders",
      }),
  });

  const folders = folderList?.data?.data ?? [];

  // 각 폴더에 대한 링크 가져오는 쿼리
  const queryString =
    currentFolderId === ALL_LINKS_ID
      ? "/links"
      : `/folders/${currentFolderId}/links`;

  const linksList = useQuery({
    queryKey: ["links", currentFolderId],
    queryFn: () =>
      fetcher<LinkRawData[]>({ url: `${queryString}`, method: "GET" }),
  });
  const rawLinks = linksList?.data?.data ?? [];

  const links = rawLinks.map(mapLinksData);

  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);

  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();

  return (
    <Layout isSticky={false} footerRef={ref}>
      <FolderLayout
        linkForm={<LinkForm hideFixedLinkForm={isIntersecting} />}
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        folderToolBar={
          <FolderToolBar folders={folders} selectedFolderId={currentFolderId} />
        }
        cardList={linksList.isFetching ? null : <CardList links={result} />}
      />
    </Layout>
  );
}

export default FolderPage;
