import Footer from "@/components/Footer/Footer";
import HeaderSearch from "@/components/Header/HeaderInput";
import LinkSection from "@/components/Main/LinkSection";
import Main from "@/components/Main/Main";
import Navigation from "@/components/Nav/Navigation";
import useObserver from "@/hooks/useObserver";
import axios from "@/lib/axios";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.query["a"];
  if (!token) {
    return {
      props: {},
      redirect: { destination: "/signin" },
    };
  }

  const res = await axios.get("/api/users", { headers: { Authorization: token } });
  const { id } = res.data.data[0];
  return {
    props: {
      id,
    },
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
