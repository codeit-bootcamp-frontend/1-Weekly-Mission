import { useEffect, RefObject, MouseEvent } from 'react';

type handlerProps = () => void;

const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handler: handlerProps,
) => {
  useEffect(() => {
    const listener: any = (e: MouseEvent): void => {
      if (!ref.current || !e.target || ref.current.contains(e.target as Node))
        return;

      handler();
    };

    window.addEventListener('mousedown', listener);

    return () => {
      window.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
