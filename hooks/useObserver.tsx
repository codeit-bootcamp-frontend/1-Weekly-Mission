import React, { useEffect, useRef, useState } from "react";

const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1,
};
export default function useObserver() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [IntersectionObserverEntry] = entries;
      setIsVisible(IntersectionObserverEntry.isIntersecting);
    }, options);

    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, isVisible };
}
