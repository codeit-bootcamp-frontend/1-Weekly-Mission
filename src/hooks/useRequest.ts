import { useEffect, useState, useCallback, DependencyList } from 'react';
import fetch from 'api/fetch';
import { AxiosRequestConfig } from 'axios';

interface UseRequestOptions {
  deps?: DependencyList;
  skip?: boolean;
  options: AxiosRequestConfig;
}

interface UseRequestReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  fetch: (args?: AxiosRequestConfig) => Promise<{ data?: T; error?: Error }>;
}

function useRequest<T>({
  deps = [],
  skip = false,
  options,
}: UseRequestOptions): UseRequestReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const refetch = useCallback(
    async (args?: AxiosRequestConfig) => {
      setIsLoading(true);
      setError(null);

      try {
        const { data: fetchedData } = await fetch({ ...options, ...args });
        setData(() => fetchedData);
        return { data: fetchedData };
      } catch (err) {
        setError(err as Error);
        return { err: error as Error };
      } finally {
        setIsLoading(false);
      }
    },
    [options]
  );

  useEffect(() => {
    if (skip) return;
    refetch();
  }, deps);

  return { data, isLoading, error, fetch: refetch };
}

export default useRequest;
