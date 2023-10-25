import { useCallback, useState } from "react";

const useAsync = (asyncFunction) => {
  const [pending, setPending] = useState(false);

  const wrappedFunction = useCallback(
    async (...args) => {
      try {
        setPending(true);
        return await asyncFunction(...args);
      } catch (error) {
        console.log(error);
      } finally {
        setPending(false);
      }
    },
    [asyncFunction]
  );

  return [pending, wrappedFunction];
};

export default useAsync;
