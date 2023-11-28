import { RefObject, useEffect, useCallback } from "react";

type IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;

interface Props {
  ref: RefObject<HTMLElement> | null;
  callback: IntersectionObserverCallback;
  options: IntersectionObserverInit;
}

const useIntersectionObserver = ({ ref, callback, options }: Props): void => {
  const observedRef = ref?.current;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const observedCallback = useCallback(callback, []);

  useEffect(() => {
    if (!observedRef) return;

    const observer = new IntersectionObserver(observedCallback, options);
    observer.observe(observedRef);

    return () => {
      observer.disconnect();
    };
  }, [observedRef, observedCallback, options]);
};

export default useIntersectionObserver;
