import { useState, useEffect } from 'react';

function useAsync({ asyncFunction, initialArgs, deps = [], skip = false }) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (...args) => {
    setPending(true);
    setError(null);
    try {
      const fetchedData = await asyncFunction(...args);
      setData(fetchedData);
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    if (skip) return;
    if (initialArgs) {
      Array.isArray(initialArgs)
        ? fetchData(...initialArgs)
        : fetchData(initialArgs);
    } else {
      fetchData();
    }
  }, deps);

  return { data, pending, error, fetchData };
}

export default useAsync;
