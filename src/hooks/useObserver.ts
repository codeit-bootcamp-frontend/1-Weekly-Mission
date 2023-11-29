import { useEffect, useRef } from "react";

export type Dom = {
  headerForm: HTMLElement | null;
  headerInput: HTMLElement | null;
  floatDiv: HTMLElement | null;
  floatInput: HTMLElement | null;
  footer: HTMLElement | null;
};

let isForm = false;

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
        entries.forEach((entry, idx) => {
          if (entry.intersectionRatio === 0) {
            if (isForm && entry.target.tagName === "FOOTER") return;
            if (entry.target.tagName === "FORM") isForm = false;
            float();
          }
          if (entry.isIntersecting) {
            if (entry.target.tagName === "FORM") {
              isForm = true;
            }
            fix();
          }
        });
      },
      { threshold: [0] }
    )
  );

  useEffect(() => {
    if (DOM.headerForm && DOM.footer) {
      observer.current.observe(DOM.headerForm);
      observer.current.observe(DOM.footer);
    }
  }, [DOM]);

  return [observer];
};

export default useObserver;
