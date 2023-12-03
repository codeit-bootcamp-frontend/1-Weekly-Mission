import { FolderRawData } from '@/pages/api/type';
import { useCallback, useState } from 'react';

function useAsync(asyncFunction: any) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = useCallback(
    async (...args: any[]) => {
      setPending(true);
      setError(null);
      try {
        return (await asyncFunction)(...args);
      } catch (error: any) {
        setError(error);
      } finally {
        setPending(false);
      }
    },
    [asyncFunction],
  );

  return [pending, error, wrappedFunction];
}

export default useAsync;
