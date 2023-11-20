import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;

      handler();
    };

    window.addEventListener('mousedown', listener);

    return () => {
      window.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
