import { useEffect } from "react";

export type Dom = {
  headerForm: HTMLElement | null;
  headerInput: HTMLElement | null;
  floatDiv: HTMLElement | null;
  floatInput: HTMLElement | null;
  footer: HTMLElement | null;
};

let isForm = false;

const useObserver = (DOM: Dom) => {
  useEffect(() => {
    const float = () => {
      DOM.floatDiv?.classList.add("float");
    };

    const fix = () => {
      DOM.floatDiv?.classList.remove("float");
    };

    const observer = new IntersectionObserver(
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
    );

    if (DOM.headerForm && DOM.footer) {
      observer.observe(DOM.headerForm);
      observer.observe(DOM.footer);
    }
  }, [DOM]);
};

export default useObserver;
