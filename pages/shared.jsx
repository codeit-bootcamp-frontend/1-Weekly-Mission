import React from "react";
import Nav from "@/ui/Nav";
import Header from "@/ui/Header";
import Article from "@/ui/Article";
import Footer from "@/ui/Footer";
import axios from "@/api/axios";

export async function getStaticProps() {
  const res = await axios.get(`/sample/user`);
  const userEmail = res?.data?.email;

  return {
    props: {
      userEmail,
    },
  };
}

export default function SharedPage({ userEmail }) {
  return (
    <>
      <Nav userEmail={userEmail} />
      <Header />
      <Article />
      <Footer />
    </>
  );
}
