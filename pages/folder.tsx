import Footer from "@/components/Footer/Footer";
import HeaderSearch from "@/components/Header/HeaderInput";
import LinkSection from "@/components/Main/LinkSection";
import Main from "@/components/Main/Main";
import Navigation from "@/components/Nav/Navigation";
import { useGetUserId } from "@/hooks/useGetUserId";
import useObserver from "@/hooks/useObserver";
import { getServerCookie } from "@/utils/getCookie";
import { GetServerSideProps } from "next";
import axios from "@/lib/axios";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const accessToken = getServerCookie(context, "accessToken");
  const res = await axios.get("/api/users", { headers: { Authorization: accessToken } });
  const { id } = res.data.data[0];
  return {
    props: { id },
  };
};

export default function FolderPage({ id }: { id: number }) {
  const { setRefForObserver } = useObserver();
  return (
    <>
      <Navigation id={id} $page="folder" />
      <HeaderSearch id={id} setRefForObserver={setRefForObserver} />
      <Main>
        <LinkSection id={id} />
      </Main>
      <Footer setRefForObserver={setRefForObserver} />
    </>
  );
}
