import fetch from "api";
import { useEffect, useState } from "react";

function useRequest({ deps = [], skip = false, ...options }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = async (...args) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: fetchedData } = await fetch({ ...options, ...args });
      setData(fetchedData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (skip) return;
    refetch();
  }, deps);

  return { data, isLoading, error, refetch };
}

export default useRequest;
