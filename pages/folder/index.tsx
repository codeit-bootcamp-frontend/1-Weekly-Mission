import { useState, useEffect, useRef } from "react";
import { Nav, Article, Header, Footer } from "@/components";
import useIntersectionObserver from "@/public/useIntersectionObserver";
import axios from "@/lib/axios";
import Layout from "@/components/Layout/Layout";

async function getServerSideProps () {
  const response = await axios.get("users/1/links");
  const links = response?.data?.data;
  const response2 = await axios.get(`/users/1/folders`);
  const folders = response2?.data?.data[0];

  return {
    props : {
      links,
      folders,
    }
  }
}

export default function FolderPage({links, folders}) {
  const linkAddBarRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver([linkAddBarRef, footerRef]);

  return (
    <>
      <Layout footerRef={footerRef}>
        <Header linkAddBarRef={linkAddBarRef} isIntersecting={isIntersecting}/>
        <Article links={links} folders={folders} /> 
      </Layout>
    </>
  );
}
