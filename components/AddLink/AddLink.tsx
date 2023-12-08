import { ReactNode, RefObject, useCallback, useRef } from "react";
import classNames from "classnames";

import { useObserverContext } from "@/contexts/ObserverContext";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import styles from "./AddLink.module.css";

interface Props {
  children?: ReactNode;
}

const addLinkOptions = {
  root: null,
  rootMargin: "60px",
  threshold: 1,
};

function AddLink({ children }: Props) {
  const addLinkRef = useRef<HTMLDivElement>(null);
  const {
    navBar: { isNavBarVisible },
    addLink: { isAddLinkVisible, setIsAddLinkVisible },
    footer: { isFooterVisible },
  } = useObserverContext();

  const addLinkObserverCallback: IntersectionObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [addLinkIntersectionObserverEntry] = entries;
      const { isIntersecting } = addLinkIntersectionObserverEntry;
      setIsAddLinkVisible(isIntersecting);
    },
    [setIsAddLinkVisible]
  );

  useIntersectionObserver({
    ref: addLinkRef,
    callback: addLinkObserverCallback,
    options: addLinkOptions,
  });

  const addLinkClass = () => {
    if (isNavBarVisible && !isFooterVisible) {
      return styles.addLink;
    }
    if (!isNavBarVisible && !isFooterVisible) {
      return classNames(styles.addLink, styles.bottom);
    }
    if (isNavBarVisible && isAddLinkVisible && isFooterVisible) {
      return styles.addLink;
    }
    return "";
  };

  return (
    <div
      className={addLinkClass()}
      ref={addLinkRef as RefObject<HTMLDivElement>}
    >
      {children}
    </div>
  );
}

export default AddLink;
