import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

type UseAsyncParams<T> = {
  asyncFunction: () => Promise<AxiosResponse<T>>;
  enabled?: boolean;
  lazyMode?: boolean;
};

export const useAsync = <T>({
  asyncFunction,
  enabled = true,
  lazyMode = false,
}: UseAsyncParams<T>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | any>(null);
  const [data, setData] = useState<null | T>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response?.data ?? null);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (enabled && !lazyMode) {
      execute();
    }
  }, [enabled, lazyMode]);

  return { execute, loading, error, data };
};
