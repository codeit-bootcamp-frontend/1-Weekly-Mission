import { useState } from "react";

function useAsync(asyncFunction: any) {
  const [error, setError] = useState<any>(null);

  const wrappedFunction = async () => {
    try {
      setError(null);
      return await asyncFunction();
    } catch (error: any) {
      setError(error);
    }
  };
  return [error, wrappedFunction];
}

export default useAsync;
