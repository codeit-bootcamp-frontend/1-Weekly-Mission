import { useState } from "react";

type Return = {
  isVisible: boolean;
  visiblePassword: (e: React.MouseEvent<HTMLElement>) => void;
};

export const usePasswordVisible = (): Return => {
  const [isVisible, setIsVisible] = useState(true);
  const visiblePassword = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsVisible((prev) => !prev);
  };

  return { isVisible, visiblePassword };
};
