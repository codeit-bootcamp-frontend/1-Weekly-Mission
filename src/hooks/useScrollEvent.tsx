import { useRef, useCallback, useEffect, useState } from "react";

export default function useScrollEvent<T>(dependencyList: T[]) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTrue, setIsTrue] = useState(false);
  console.log(ref);

  const intersectCallback = useCallback(
    (entries) => {
      if (entries[0].isIntersecting) {
        console.log("검색대상보일때");
        setIsTrue(true);
      } else {
        console.log("검색대상안보일때");
        setIsTrue(false);
      }
    },
    [ref.current]
  );

  useEffect(() => {
    let io;
    if (ref.current) {
      io = new IntersectionObserver(intersectCallback, { threshold: 0 });
      io.observe(ref.current); //html요소 감지
    }
    return () => io && io.disconnect();
  }, [...dependencyList]);

  return { ref, isTrue };
}
