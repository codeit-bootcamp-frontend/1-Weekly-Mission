import Nav from "@/components/nav/Nav";
import HeaderAddLink from "@/components/header/HeaderAddLink";
import Footer from "@/components/common/Footer";
import FolderContainer from "@/components/folder/FolderContainer";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";

const FolderPage = () => {
  const [isSticky, setIsSticky] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const fixedWrapperRef = useRef<HTMLDivElement>(null);

  const observerCallback: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsSticky(!entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0,
    });

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [observerCallback]);

  return (
    <>
      <Head>
        <title>Folder</title>
      </Head>
      <Nav pageType="folder" />
      <HeaderAddLink
        headerRef={headerRef}
        isSticky={isSticky}
        fixedWrapperRef={fixedWrapperRef}
      />
      <FolderContainer />
      <Footer />
    </>
  );
};

export default FolderPage;
