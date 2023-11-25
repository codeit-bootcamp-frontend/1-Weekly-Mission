import { useState, useEffect } from "react";
import { debounce } from "lodash";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const listener = (mounted) => {
    if (mounted) {
      setScrollY(window.scrollY);
    }
  };

  const delay = 100;

  useEffect(() => {
    let mounted = true;
    window.addEventListener(
      "scroll",
      debounce(() => listener(mounted), delay)
    );
    return () => {
      mounted = false;
      window.removeEventListener("scroll", listener);
    };
  });

  return { scrollY };
};
