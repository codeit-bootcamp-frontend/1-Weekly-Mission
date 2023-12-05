import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

export const useAsync = <T,>(
  asyncFunction: () => Promise<AxiosResponse<T>>
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | any>(null);
  const [data, setData] = useState<null | T>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response.data);
      return response;
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { execute, loading, error, data };
};
