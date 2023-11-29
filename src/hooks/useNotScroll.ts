import { useEffect } from 'react';

function useNotScroll(): void {
  useEffect(() => {
    document.body.style.cssText = `
            position: fixed; 
            top: -${window.scrollY}px;
            overflow-y: hidden;
            width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  return;
}

export default useNotScroll;
