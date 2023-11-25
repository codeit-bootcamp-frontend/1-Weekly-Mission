import { useState, useEffect } from "react";

export default function useIntersectionObserver (elementRefs) {
  const [areIntersecting, setAreIntersecting] = useState(Array(elementRefs.length).fill(false));

  useEffect(() => {
    const observers = elementRefs.map((ref, index) => {
      return new IntersectionObserver((entries) => {
        const intersectionArray = [...areIntersecting];
        entries.forEach((entry) => {
          intersectionArray[index] = entry.isIntersecting;
        });
        setAreIntersecting(intersectionArray);
      }, { threshold: 0 });

    });

    elementRefs.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, [elementRefs, areIntersecting]);

  return areIntersecting.every((value) => value === false);
}
