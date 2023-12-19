import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { RefObject } from "react";

import LoginButton from "./LoginButton";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useObserverContext } from "@/contexts/ObserverContext";

import logo from "@/assets/images/logo.svg";

import styles from "./NavBar.module.css";

const navBarOptions = {
  root: null,
  rootMargin: "80px",
  threshold: 1,
};

function NavBar() {
  const navBarRef = useRef<HTMLDivElement>(null);
  const {
    navBar: { setIsNavBarVisible },
  } = useObserverContext();

  const navBarObserverCallback = (entries: IntersectionObserverEntry[]) => {
    const [footerIntersectionObserverEntry] = entries;
    const { isIntersecting } = footerIntersectionObserverEntry;
    setIsNavBarVisible(isIntersecting);
  };

  useIntersectionObserver({
    ref: navBarRef,
    callback: navBarObserverCallback,
    options: navBarOptions,
  });

  return (
    <div className={styles.navBar} ref={navBarRef as RefObject<HTMLDivElement>}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="LinkBrary 로고" />
        </Link>
        <LoginButton />
      </div>
    </div>
  );
}

export default NavBar;
