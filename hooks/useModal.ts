import { useState } from 'react';

/**
 * 모달을 열고, 닫을 때 사용하는 커스텀 훅
 */
function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  function handleModalOpen(): void {
    setIsOpen(true);
  }

  function handleModalClose(): void {
    setIsOpen(false);
  }

  return { isOpen, handleModalOpen, handleModalClose };
}

export default useModal;
