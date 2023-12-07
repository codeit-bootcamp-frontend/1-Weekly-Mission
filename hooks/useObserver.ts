import { useState, useEffect } from 'react';

export function useObserver(className: string): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting ? true : false);
      });
    });

    const target = document.querySelector(className);
    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, [className]);

  return visible;
}
