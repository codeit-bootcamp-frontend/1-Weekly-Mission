import { useEffect, useRef } from "react";

export type Dom = {
  headerForm: HTMLElement | null;
  headerInput: HTMLElement | null;
  floatDiv: HTMLElement | null;
  floatInput: HTMLElement | null;
};

const useObserver = (DOM: Dom) => {
  const float = () => {
    DOM.floatDiv?.classList.add("float");
  };

  const fix = () => {
    DOM.floatDiv?.classList.remove("float");
  };

  const observer = useRef(
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio === 0) {
            float();
          }
          if (entry.isIntersecting) {
            fix();
          }
        });
      },
      { threshold: [0] }
    )
  );

  useEffect(() => {
    if (DOM.headerForm) {
      observer.current.observe(DOM.headerForm);
    }
  }, [DOM]);

  return [observer];
};

export default useObserver;
