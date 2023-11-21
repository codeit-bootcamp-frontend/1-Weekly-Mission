import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";

interface UseAsyncReturn<T> {
  execute: () => void;
  loading: boolean;
  error: Error | null;
  data: T | null;
}

export const useAsync = <T>(asyncFunction: () => Promise<{ data: T }>): UseAsyncReturn<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);
  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response?.data);
      return response;
    } catch (error) {
      if (error instanceof Error) setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(execute);

  return { execute, loading, error, data };
};
