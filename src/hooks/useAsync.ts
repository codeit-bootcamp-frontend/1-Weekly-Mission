import { useCallback, useEffect, useState } from 'react';

interface useAsyncReturn<T> {
  data: T;
  isLoading: boolean;
  error: unknown;
  fetchData: () => Promise<void>; // 함수
}

type CallbackType<T> = () => Promise<T>;

const useAsync = <T>(
  callback: CallbackType<T>,
  deps: unknown[] = [],
): useAsyncReturn<T> => {
  const [data, setData] = useState<T>(null as any);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | unknown>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await callback();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, deps);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line;
  }, []);

  return { data, isLoading, error, fetchData };
};

export default useAsync;
