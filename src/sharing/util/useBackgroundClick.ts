import { useEffect } from "react";
import { ROOT_ID } from "./constant";

export const useBackgroundClick = (callback: (event: MouseEvent) => void) => {
  useEffect(() => {
    const rootElement = document.getElementById(ROOT_ID);

    const handleClick = (event: MouseEvent) => {
      callback(event);
    };

    rootElement?.addEventListener("click", handleClick);
    return () => {
      rootElement?.removeEventListener("click", handleClick);
    };
  }, [callback]);
};
