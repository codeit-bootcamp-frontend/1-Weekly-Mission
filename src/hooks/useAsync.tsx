import { useState } from "react";

interface UseAsyncResponse {
  wrappedFunction: (param?: object) => object;
  error: Error | null;
  isLoading: boolean;
}

const useAsync = (
  asyncFunction: <T extends {}>(param?: object) => Promise<T>
): UseAsyncResponse => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const wrappedFunction = async (param?: object) => {
    setLoading(true);
    setError(null);
    try {
      const res = await asyncFunction(param);
      return res;
    } catch (error) {
      if (error instanceof Error) setError(error);
    } finally {
      setLoading(false);
      return undefined;
    }
  };
  return { isLoading, error, wrappedFunction };
};

export default useAsync;
