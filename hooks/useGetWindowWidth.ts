import { useState, useEffect } from 'react';

/**
 * @returns 현재 윈도우 창크기의 innerWidth값
 */
function useGetWindowWidth(): number {
  if (typeof window === 'undefined') return 0;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    function resizeListener(): void {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener('resize', resizeListener);
  });
  return innerWidth;
}

export default useGetWindowWidth;
