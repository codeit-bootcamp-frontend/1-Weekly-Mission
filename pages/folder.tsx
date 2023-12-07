import Footer from "@/components/Footer/Footer";
import HeaderSearch from "@/components/Header/HeaderInput";
import LinkSection from "@/components/Main/LinkSection";
import Main from "@/components/Main/Main";
import Navigation from "@/components/Nav/Navigation";
import useObserver, { Dom } from "@/hooks/useObserver";
import axios from "@/lib/axios";
import { GetServerSideProps } from "next";
import { useRef } from "react";

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

const initialRef = { headerForm: null, headerInput: null, floatDiv: null, floatInput: null, footer: null };

export default function FolderPage({ id }: { id: number }) {
  const DOM = useRef<Dom>(initialRef);
  useObserver(DOM.current);

  return (
    <>
      <Navigation id={id} $page="folder" />
      <HeaderSearch id={id} dom={DOM} />
      <Main>
        <LinkSection id={id} />
      </Main>
      <Footer dom={DOM} />
    </>
  );
}
