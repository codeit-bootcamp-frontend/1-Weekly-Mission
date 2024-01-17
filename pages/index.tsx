import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { queryClientProvider } from "@/apis/queryClientProvider";
import { dehydrate } from "@tanstack/react-query";
import Header from "@/components/Header/Header";
import HeroSec from "@/components/indexComponents/HeroSec/HeroSec";
import ServiceExplainer from "@/components/indexComponents/ServiceExplainer/ServiceExplainer";
import Footer from "@/components/Footer/Footer";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { queryClient } = await queryClientProvider(context);

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

const Home = ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Header position="sticky" />
      <HeroSec />
      <ServiceExplainer />
      <Footer />
    </>
  );
};

export default Home;
