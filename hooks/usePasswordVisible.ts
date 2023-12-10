import { useState } from "react";

const usePasswordVisible = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibility = () => setIsVisible((prev) => !prev);

  return { isVisible, handleVisibility };
};

export default usePasswordVisible;
