/* 드롭다운을 열고 닫을 때 쓰는 훅 */

import { useState } from "react";

export default function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setTimeout(() => setIsOpen(false), 200);
  };

  return { isOpen, handleOpen, handleClose };
}
