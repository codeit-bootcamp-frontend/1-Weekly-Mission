import { useState, useEffect } from "react";
import { debounce } from "lodash";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const listener = (mounted: boolean) => {
    if (mounted) {
      setScrollY(window.scrollY);
    }
  };

  const delay = 70;

  useEffect(() => {
    let mounted = true;
    window.addEventListener(
      "scroll",
      debounce(() => listener(mounted), delay)
    );
    return () => {
      mounted = false;
      window.removeEventListener("scroll", () => listener(mounted));
    };
  });

  return { scrollY };
};
