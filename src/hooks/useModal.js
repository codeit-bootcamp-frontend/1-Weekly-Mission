import React, { useCallback, useState } from 'react';
import Modal from '../components/modal/Modal';

export default function useModal({ useBlur = true } = {}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const open = useCallback(() => {
    setIsModalOpen(() => true);
  }, []);

  const close = useCallback(() => {
    setIsModalOpen(() => false);
  }, []);

  return {
    Modal: isModalOpen
      ? ({ children }) => (
          <Modal onClose={useBlur ? close : null}>{children}</Modal>
        )
      : () => null,
    open,
    close,
    isModalOpen,
  };
}
