import React from "react";
import Nav from "@/ui/Nav";
import Header from "@/ui/Header";
import Article from "@/ui/Article";
import Footer from "@/ui/Footer";
import axios from "@/api/axios";

interface navPropsType {
  userEmail: string;
}

export async function getStaticProps() {
  const res = await axios.get(`/sample/user`);
  const userEmail: string = res?.data?.email;

  return {
    props: {
      userEmail,
    },
  };
}

export default function SharedPage({ userEmail }: navPropsType) {
  return (
    <>
      <Nav userEmail={userEmail} />
      <Header />
      <Article />
      <Footer />
    </>
  );
}
