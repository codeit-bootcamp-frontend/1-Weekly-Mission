import { useCallback, useState } from "react";

const useAsync = (asyncFunc) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const callbackMemoized = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      return await asyncFunc;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [asyncFunc]);

  return [loading, error, callbackMemoized];
};

export default useAsync;
