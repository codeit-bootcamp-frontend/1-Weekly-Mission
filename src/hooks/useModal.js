import { useState } from 'react';

function useModal(modals) {
  const [modal, setModal] = useState(null);

  const toggleShow = (modal) => {
    if (!modal) {
      setModal(null);
      return;
    }
    setModal(modals?.[modal]);
  };

  return [toggleShow, modal];
}

export default useModal;
