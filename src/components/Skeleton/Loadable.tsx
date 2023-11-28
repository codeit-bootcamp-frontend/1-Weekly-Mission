import { useState, useEffect, ReactNode } from "react";

interface Props {
  isLoading: boolean;
  fallback: ReactNode;
  children: ReactNode;
}

const Loadable = ({ isLoading, fallback, children }: Props) => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isLoading) {
      timer = setTimeout(() => {
        setShowFallback(true);
      }, 400);
    } else {
      setShowFallback(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  return showFallback ? (fallback as JSX.Element) : (children as JSX.Element);
};

export default Loadable;
