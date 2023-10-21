import { useCallback, useState } from "react"

function useCatch(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const wrappedFunction = useCallback(async (...args) => {
    try {
      setPending(true);
      setError(null);
      return await asyncFunction(...args)
    } catch (e) {
      setError(e);
      return;
    } finally {
      setPending(false);
    }
  }, [asyncFunction])

  return [pending, error, wrappedFunction]
}

export default useCatch