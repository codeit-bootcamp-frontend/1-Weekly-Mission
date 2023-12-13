import { RefObject, useEffect } from "react";

type IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;

interface Props {
  ref: RefObject<HTMLElement> | null;
  callback: IntersectionObserverCallback;
  options: IntersectionObserverInit;
}

function useIntersectionObserver({ ref, callback, options }: Props): void {
  const observedRef = ref?.current;

  useEffect(() => {
    if (!observedRef) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(observedRef);

    return () => {
      observer.disconnect();
    };
  }, [observedRef, callback, options]);
}

export default useIntersectionObserver;
