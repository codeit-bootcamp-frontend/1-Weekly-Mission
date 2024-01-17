import Footer from "@/components/Footer/Footer";
import HeaderSearch from "@/components/Header/HeaderSearch";
import LinkSection from "@/components/Main/LinkSection";
import Main from "@/components/Main/Main";
import Navigation from "@/components/Nav/Navigation";
import useObserver from "@/hooks/useObserver";
import axiosInstance from "@/lib/axios";
import { getServerCookie } from "@/utils/getCookie";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const folderId = context.query.folderId ?? null;
  const accessToken = getServerCookie(context, "accessToken");

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["userId"],
    queryFn: async () => {
      const res = await axiosInstance.get("/users", { headers: { Authorization: accessToken } });
      return res.data[0];
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ["folderData"],
    queryFn: async () => {
      const res = await axiosInstance.get("/folders", { headers: { Authorization: accessToken } });
      return res.data;
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ["linkData", folderId],
    queryFn: async () => {
      if (folderId) {
        const res = await axiosInstance.get(`/folders/${folderId}/links`, { headers: { Authorization: accessToken } });
        return res.data;
      }
      const res = await axiosInstance.get(`/links`, { headers: { Authorization: accessToken } });
      return res.data;
    },
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function FolderPage() {
  const { setRefForObserver } = useObserver();
  return (
    <>
      <Navigation />
      <HeaderSearch setRefForObserver={setRefForObserver} />
      <Main>
        <LinkSection />
      </Main>
      <Footer setRefForObserver={setRefForObserver} />
    </>
  );
}
