import Footer from "@/components/Footer/Footer";
import HeaderSearch from "@/components/Header/HeaderInput";
import LinkSection from "@/components/Main/LinkSection";
import Main from "@/components/Main/Main";
import Navigation from "@/components/Nav/Navigation";
import useObserver from "@/hooks/useObserver";
import axiosInstance from "@/lib/axios";
import { getServerCookie } from "@/utils/getCookie";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const accessToken = getServerCookie(context, "accessToken");

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["userId"],
    queryFn: async () => {
      const res = await axiosInstance.get("/users", { headers: { Authorization: accessToken } });
      return res.data[0];
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
