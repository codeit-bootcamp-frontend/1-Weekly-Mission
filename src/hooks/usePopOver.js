import { useState } from "react";

export default function usePopOver() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopOver = () => {
    setIsOpen(true);
  };

  const closePopOver = () => {
    setIsOpen(false);
  };

  return { isOpen, openPopOver, closePopOver };
}
