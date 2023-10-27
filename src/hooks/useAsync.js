import { useState } from "react";

function useAsync(asyncFunction) {
  const [error, setError] = useState(null);

  const wrappedFunction = async () => {
    try {
      setError(null);
      return await asyncFunction();
    } catch (error) {
      setError(error);
    } finally {
    }
  };
  return [error, wrappedFunction];
}

export default useAsync;
