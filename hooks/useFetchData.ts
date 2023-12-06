import { useState, useEffect } from "react";

function useFetchData(fetchFunc: Function, request: object = {}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    // generic을쓰기..
    fetchFunc({ ...request }).then((result: any) => {
      const data = result;
      if (data) {
        setData(data);
        setIsLoading(false);
        setError(false);
      } else {
        setError(true);
      }
    });
  }, []);

  return [data, isLoading, error];
}

export default useFetchData;
