import { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';

const useAsync = <T,>(asyncFunction: () => Promise<AxiosResponse<T>>) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = useCallback(
    async (...args: any[]) => {
      setPending(true);
      setError(null);
      try {
        return await asyncFunction(...args);
      } catch (error: any) {
        setError(error);
      } finally {
        setPending(false);
      }
    },
    [asyncFunction],
  );

  return [pending, error, wrappedFunction];
};

export default useAsync;
