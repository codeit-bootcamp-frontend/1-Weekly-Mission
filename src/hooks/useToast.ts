import { useState } from 'react';

function useToast(wait: number): [boolean, () => void] {
  const [show, setShow] = useState(false);

  const showToast = (): void => {
    if (show) return;
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, wait);
  };

  return [show, showToast];
}

export default useToast;
