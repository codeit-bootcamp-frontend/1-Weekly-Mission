import { useLayoutEffect, useRef, useState } from "react";

export const useIntersectionObserver = <T extends HTMLElement>(
  once: boolean = false,
  options?: IntersectionObserverInit
) => {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (once && entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref?.current) {
      observer.observe(ref.current!);
    }

    return () => {
      observer.disconnect();
    };
  }, [options, once]);
  return { ref, isIntersecting };
};
