import { useEffect } from "react";
import { ROOT_ID } from "./constant";
export const useBackgroundClick = (callback: (e: MouseEvent) => void) => {
  useEffect(() => {
    const rootElement = document.getElementById(ROOT_ID);
    rootElement?.addEventListener("click", callback);
    return () => {
      rootElement?.removeEventListener("click", callback);
    };
  }, [callback]);
};
