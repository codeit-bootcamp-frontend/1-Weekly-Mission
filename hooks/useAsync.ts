import { useCallback, useState } from "react";

function useAsync<T extends any[], U>(
  asyncFunction: (...args: T) => Promise<U>
): { pending: boolean; wrappedFunction: (...args: T) => Promise<U> } {
  const [pending, setPending] = useState<boolean>(false);

  const wrappedFunction = useCallback(
    async (...args: T) => {
      try {
        setPending(true);
        return await asyncFunction(...args);
      } finally {
        setPending(false);
      }
    },
    [asyncFunction]
  );

  return { pending, wrappedFunction };
}

export default useAsync;
