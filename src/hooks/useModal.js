import { useCallback, useState } from 'react';
import { Dialog } from '../components/modal/DialogMain';

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const open = useCallback(() => {
    setIsModalOpen(() => true);
  }, []);

  const close = useCallback(() => {
    setIsModalOpen(() => false);
  }, []);

  return {
    Dialog,
    open,
    close,
    isModalOpen,
  };
}
