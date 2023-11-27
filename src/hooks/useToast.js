import { useState } from 'react';
import debounce from 'utils/debounce';

function useToast(wait) {
  const [show, setShow] = useState(false);

  const showToast = debounce(() => {
    if (show) return;
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, wait);
  }, 150);

  return [show, showToast];
}

export default useToast;
