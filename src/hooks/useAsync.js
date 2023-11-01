import { useCallback, useEffect, useState } from 'react';

// skip = false 일 경우 useEffect 작동
const useAsync = (callback, deps = [], skip = false) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    if (skip) return;
    fetchData();

    // eslint-disable-next-line;
  }, []);

  return { data, isLoading, error, fetchData };
};

export default useAsync;
