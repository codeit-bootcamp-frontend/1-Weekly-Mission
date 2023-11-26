import { useState, useEffect, useCallback } from "react";
function useAsync<T>(getData: () => Promise<T>, skip = false) {
  const [data, setData] = useState<T>();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<Error>();
  const fetchData = useCallback(async () => {
    setPending(true);
    try {
      const fetchedData = await getData();
      setData(fetchedData);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setPending(false);
    }
  }, [getData]);

  // const fetchData = useCallback(
  //   async (...args) => {
  //     setPending(true);
  //     try {
  //       const fetchedData = await getData(...args);
  //       setData(fetchedData);
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         setError(error);
  //       }
  //     } finally {
  //       setPending(false);
  //     }
  //   },
  //   [getData]
  // );

  useEffect(() => {
    if (skip) return;
    fetchData();
  }, [fetchData, skip]);
  return { data, pending, error, fetchData };
}
export default useAsync;
