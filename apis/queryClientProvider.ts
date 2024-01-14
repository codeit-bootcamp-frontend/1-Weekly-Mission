import { getAccessToken } from "@/business/getAccessToken";
import { QueryClient } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { FolderById, Folders, Link, User, UserById } from "@/types/server.type";
import fetcher from "./instance";

export const queryClientProvider = async (context: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();

  const accessToken = getAccessToken(context) as string;

  const url = context.req.url as string;

  await queryClient.prefetchQuery({
    queryKey: ["currentUser"],
    queryFn: () => fetcher<User[]>({ method: "get", url: "/users", headers: { Authorization: accessToken } }),
  });

  const folder_ID = context.query["id"];

  if (folder_ID) {
    const folderData = await queryClient.fetchQuery({
      queryKey: ["FolderById", folder_ID],
      queryFn: () => fetcher<FolderById[]>({ method: "get", url: `/folders/${folder_ID}` }),
    });

    const [{ user_id: user_ID }] = folderData?.data ?? [];

    if (user_ID) {
      await queryClient.prefetchQuery({
        queryKey: ["userById", user_ID],
        queryFn: () => fetcher<UserById[]>({ method: "get", url: `/users/${user_ID}` }),
      });

      await queryClient.prefetchQuery({
        queryKey: ["LinkById", folder_ID],
        queryFn: () => fetcher<Link[]>({ method: "get", url: `/folders/${folder_ID}/links` }),
      });
    }
  }

  if (url === "/folder") {
    const folderData = await queryClient.fetchQuery({
      queryKey: ["Folders"],
      queryFn: () => fetcher<Folders[]>({ method: "get", url: "/folders", headers: { Authorization: accessToken } }),
    });

    if (folderData?.data) {
      await queryClient.prefetchQuery({
        queryKey: ["Links"],
        queryFn: () => fetcher<Link[]>({ method: "get", url: `/links`, headers: { Authorization: accessToken } }),
      });

      folderData.data.forEach(async (data) => {
        const folder_Id = data.id;

        await queryClient.prefetchQuery({
          queryKey: ["LinksByFolderId", folder_Id],
          queryFn: () =>
            fetcher<Link[]>({
              method: "get",
              url: `/folders/${folder_Id}/links`,
              headers: { Authorization: accessToken },
            }),
        });
      });
    }
  }

  return { queryClient, accessToken };
};
