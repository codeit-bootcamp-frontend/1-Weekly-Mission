import { useState } from "react";

function useAsync(asyncFunction) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await asyncFunction();
      return res;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return [isLoading, error, wrappedFunction];
}

export default useAsync;
