import { useState } from "react";

export default function useFetch(asyncFunc) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const wrappedFunction = async (...args) => {
    try {
      return await asyncFunc(...args);
    } catch (error) {
      setError(error);
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
