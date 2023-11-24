import { useState } from "react";

export default function useFetch(asyncFunc: (...args: any[]) => Promise<any>) {
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
}
