import { useEffect } from "react";
import { ROOT_ID } from "./constant";

export const useBackgroundClick = (callback: (this: HTMLElement, ev: MouseEvent) => any) => {
  useEffect(() => {
    const rootElement = document.getElementById(ROOT_ID);
    rootElement?.addEventListener<"click">("click", callback);
    return () => {
      rootElement?.removeEventListener<"click">("click", callback);
    };
  }, [callback]);
};
