// NavBar.tsx 파일
import { RefObject } from "react";

import { useObserverContext } from "../../contexts/ObserverContext";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import LoginButton from "./LoginButton";
import logo from "../../assets/images/logo.svg";

import styles from "./NavBar.module.css";

const navBarOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const NavBar = () => {
  const {
    navBarRef: { navBarRef, setIsNavBarVisible },
  } = useObserverContext();

  const navBarObserverCallback = (entries: IntersectionObserverEntry[]) => {
    const [footerIntersectionObserverEntry] = entries;
    const { isIntersecting } = footerIntersectionObserverEntry;
    setIsNavBarVisible(isIntersecting);

    console.log("NavBar", isIntersecting);
  };

  useIntersectionObserver({
    ref: navBarRef,
    callback: navBarObserverCallback,
    options: navBarOptions,
  });

  return (
    <div className={styles.navBar} ref={navBarRef as RefObject<HTMLDivElement>}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="LinkBrary 로고" />
        </a>
        <LoginButton />
      </div>
    </div>
  );
};

export default NavBar;
