import { Helmet } from "react-helmet-async";
import Nav from "../components/nav/Nav";
import HeaderAddLink from "../components/header/HeaderAddLink";
import Footer from "../components/common/Footer";
import FolderContainer from "../components/folder/FolderContainer";
import { useEffect, useRef, useState } from "react";

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
      <Helmet>
        <title>Folder</title>
      </Helmet>
      <Nav pageType="folder" />
      <HeaderAddLink headerRef={headerRef} isSticky={isSticky} fixedWrapperRef={fixedWrapperRef} />
      <FolderContainer />
      <Footer />
    </>
  );
};

export default FolderPage;
