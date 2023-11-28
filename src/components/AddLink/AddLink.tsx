import { ReactNode, RefObject, useCallback } from "react";
import classNames from "classnames";

import { useObserverContext } from "../../contexts/ObserverContext";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import styles from "./AddLink.module.css";

interface Props {
  children?: ReactNode;
}

const addLinkOptions = {
  root: null,
  rootMargin: "60px",
  threshold: 1,
};

const AddLink = ({ children }: Props) => {
  const {
    navBarRef: { isNavBarVisible },
    addLinkRef: { addLinkRef, isAddLinkVisible, setIsAddLinkVisible },
    footerRef: { isFooterVisible },
  } = useObserverContext();

  const addLinkObserverCallback: IntersectionObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [addLinkIntersectionObserverEntry] = entries;
      const { isIntersecting } = addLinkIntersectionObserverEntry;

      setIsAddLinkVisible(isIntersecting);
      console.log("AddLink", isIntersecting);
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
};

export default AddLink;
