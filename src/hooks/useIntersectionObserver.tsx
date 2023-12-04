import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = <T extends HTMLElement>(
  once: boolean = false,
  options?: IntersectionObserverInit,
) => {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      setIsIntersecting(entries[0].isIntersecting);
      if (once && entries[0].isIntersecting) {
        observer.unobserve(entries[0].target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options, once]);

  return { ref, isIntersecting };
};
