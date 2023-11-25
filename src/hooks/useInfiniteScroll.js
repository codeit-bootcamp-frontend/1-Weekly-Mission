import { useCallback, useEffect, useRef } from "react";

const useInfiniteScroll = (onIntersect, boolean) => {
  const ref = useRef(null);

  const handleIntersect = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        onIntersect(!boolean);
      }
    },
    [onIntersect, boolean]
  );

  /*컴포넌트 렌더가 완료됨에 따라 observer가 생성되어야 하므로 useEffect를 활용해야 한다. 
  또한 target이 생성되기 전에 observe를 시작할 수 없으므로 조건문을 넣어줬다.*/

  useEffect(() => {
    let observer;
    if (ref.current) {
      // 관찰 대상이 존재하는 체크한다.
      observer = new IntersectionObserver(handleIntersect, { threshold: 0.6 }); // 관찰 대상이 존재한면 관찰자를 생성한다.
      observer.observe(ref.current); // 관찰자에게 타켓을 지정해준다.
    }
    return () => observer && observer.disconnect();
  }, [ref, handleIntersect]);

  return ref;
};

export default useInfiniteScroll;
