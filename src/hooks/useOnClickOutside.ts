import { useEffect, RefObject, MouseEvent } from 'react';

type HandlerProps = () => void;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: HandlerProps,
) => {
  useEffect(() => {
    const listener = (e: MouseEvent): void => {
      if (!ref.current || !e.target || ref.current.contains(e.target as Node))
        return;

      handler();
    };

    window.addEventListener('mousedown', () => listener);

    return () => {
      window.removeEventListener('mousedown', () => listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
