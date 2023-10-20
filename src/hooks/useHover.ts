import { useState } from "react";

function useHover() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return { isHovered, handleMouseEnter, handleMouseLeave };
}

export default useHover;
