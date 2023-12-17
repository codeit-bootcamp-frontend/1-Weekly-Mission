import { useCallback, useEffect, useRef, useState } from "react";

export type Dom = {
  headerForm: HTMLElement | null;
  headerInput: HTMLElement | null;
  floatDiv: HTMLElement | null;
  floatInput: HTMLElement | null;
  footer: HTMLElement | null;
};

export type SetRefForObserver = <T extends HTMLElement | null>(el: T) => void;

const useObserver = () => {
  const DOM = useRef<Dom>({ headerForm: null, headerInput: null, floatDiv: null, floatInput: null, footer: null });
  const [isForm, setIsForm] = useState(true);

  const setRefForObserver: SetRefForObserver = useCallback((el) => {
    if (!el) return;
    if (el.tagName === "FOOTER") {
      DOM.current.footer = el;
      return;
    }
    if (el.tagName === "FORM") {
      DOM.current.headerForm = el;
      return;
    }
    if (el.tagName === "DIV") {
      DOM.current.floatDiv = el;
      return;
    }
    if (el.tagName === "INPUT" && el.parentElement?.tagName === "FORM") {
      DOM.current.headerInput = el;
      return;
    }
    DOM.current.floatInput = el;
  }, []);

  useEffect(() => {
    const float = () => {
      DOM.current.floatDiv?.classList.add("float");
    };

    const fix = () => {
      DOM.current.floatDiv?.classList.remove("float");
    };

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio === 0) {
            if (isForm && entry.target.tagName === "FOOTER") return;
            if (entry.target.tagName === "FORM") {
              setIsForm(false);
            }
            float();
          }
          if (entry.isIntersecting) {
            if (entry.target.tagName === "FORM") {
              setIsForm(true);
            }
            fix();
          }
        });
      },
      { threshold: [0] }
    );

    if (DOM.current.headerForm && DOM.current.footer) {
      observer.observe(DOM.current.headerForm);
      observer.observe(DOM.current.footer);
    }
  }, [isForm]);

  return { setRefForObserver };
};

export default useObserver;
