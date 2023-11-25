import { useEffect } from "react";

/**
 * 모달이 띄워지면 화면 스크롤을 할 수 없도록 막는 함수
 */
const useNotScroll = () => {
  useEffect(() => {
    document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  return;
};

export default useNotScroll;
