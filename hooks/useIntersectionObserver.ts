import { useEffect, useRef } from "react";

function useIntersectionObserver(
  callback: () => void,
  options: IntersectionObserverInit
) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    }, options);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [callback, options]);

  const observe = (element: HTMLElement) => {
    if (observer.current) {
      observer.current.observe(element);
    }
  };

  const unobserve = (element: HTMLElement) => {
    if (observer.current) {
      observer.current.unobserve(element);
    }
  };

  return [observe, unobserve];
}

export default useIntersectionObserver;
