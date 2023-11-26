import { useState, useEffect } from "react";
function useAsync(asyncFunction, deps = [], skip = false) {
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
    fetchData();
  }, deps);
  return [data, pending, error, fetchData];
}
export default useAsync;
