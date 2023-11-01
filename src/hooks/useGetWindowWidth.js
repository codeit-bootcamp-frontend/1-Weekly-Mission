import { useState, useEffect } from 'react';

/**
 * @returns 현재 윈도우 창크기의 innerWidth값
 */
function useGetWindowWidth() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  });
  return innerWidth;
}

export default useGetWindowWidth;
