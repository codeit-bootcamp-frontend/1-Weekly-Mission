import { useRef } from "react";

function useIntersectionObserver(
  callback: any,
  option: IntersectionObserverInit
) {
  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    }, option)
  );

  const observe = (element: HTMLElement) => {
    observer.current.observe(element);
  };

  const unobserve = (element: HTMLElement) => {
    observer.current.unobserve(element);
  };

  return [observe, unobserve];
}

export default useIntersectionObserver;
