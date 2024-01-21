import { ReactNode, useEffect, useState } from "react";

const DEFERRED_MS = 300;

interface Props {
  fallback: ReactNode;
  isFetching: boolean;
  children?: ReactNode;
}

const DeferredSuspense = ({ fallback, isFetching, children }: Props) => {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, DEFERRED_MS);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDeferred) return null;

  return <>{isFetching ? fallback : children}</>;
};

export default DeferredSuspense;
