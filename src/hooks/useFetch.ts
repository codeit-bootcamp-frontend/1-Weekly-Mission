import { useState } from "react";

interface UseFetch<T> {
  isLoading: boolean;
  error: null | Error;
  wrappedFunction: (...args: any[]) => Promise<T | undefined>;
}

const useFetch = <T>(asyncFunc: (...args: any[]) => Promise<T>): UseFetch<T> => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  const wrappedFunction = async (...args: any[]) => {
    try {
      return await asyncFunc(...args);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    wrappedFunction,
  };
};

export default useFetch;
