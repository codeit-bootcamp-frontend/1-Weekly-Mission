import { useState, useEffect } from 'react';

function useAsync(asyncFunction, initialArgs = [], deps = [], skip = false) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (...initialArgs) => {
    setPending(true);
    setError(null);
    try {
      const fetchedData = await asyncFunction(...initialArgs);
      setData(fetchedData);
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData(initialArgs);
  }, deps);

  return [data, pending, error, fetchData];
}

export default useAsync;
