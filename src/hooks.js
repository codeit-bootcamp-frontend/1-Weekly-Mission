import { useEffect, useState } from "react";

export const useWindowSizeCustom = () => {
  // 초기 state 값은 undefined로 세팅한다.
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          // 현재 브라우저의 가로, 세로 길이로 셋팅
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // resize 이벤트가 발생할 때 handleResize 함수가 실행되도록 한다.
      window.addEventListener("resize", handleResize);

      // 초기값을 설정할 수 있도록 handleResize 함수를 한 번 실행시킨다.
      handleResize();

      // 이벤트 리스너를 제거하여 이벤트 리스너가 리사이즈될 때마다 계속해서 생겨나지 않도록 처리한다. (clean up)
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return () =>
        window.removeEventListener("resize", () => {
          return null;
        });
    }
  }, []); // 컴포넌트가 처음 마운트 될때와 언마운트 될 때 실행
  return windowSize;
};
