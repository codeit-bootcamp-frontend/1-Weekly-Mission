import { useState, useEffect } from "react";

const useToast = () => {
  const [isToastPop, setIsToastPop] = useState(false);

  const openToast = () => {
    setIsToastPop(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsToastPop(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [isToastPop]);

  const closeToast = () => {
    setIsToastPop(false);
  };

  return { isToastPop, openToast, closeToast };
};

export { useToast };
