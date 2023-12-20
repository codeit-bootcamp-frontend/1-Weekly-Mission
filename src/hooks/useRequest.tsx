import { useState, useCallback, useEffect } from "react";
import { AxiosResponse } from "axios";

export default function useAsync(asyncFunction: () => Promise<AxiosResponse>) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState({});

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData(() => {
      return {};
    });
    try {
      const response = await asyncFunction();
      setData(response?.data ?? null);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    execute();
  }, [execute]);

  return { execute, loading, error, data };
}
