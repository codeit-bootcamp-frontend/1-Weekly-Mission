import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";
import { AxiosResponse } from "axios";

export const useAsync = <T>(asyncFunction: () => Promise<AxiosResponse<T>>) => {
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

  useEffectOnce(() => {
    execute();
  });

  return { execute, loading, error, data };
};
