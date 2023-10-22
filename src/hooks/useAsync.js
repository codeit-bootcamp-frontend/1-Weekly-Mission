import { useCallback, useEffect, useState } from "react";

export default function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const callbackMemoized = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    try {
      const result = await callback;
      setValue(result);
    } catch (error) {
      setError(error);
      return;
    } finally {
      setLoading(false);
    }
  }, [dependencies]);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}
