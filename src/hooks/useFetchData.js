import { useState, useEffect } from "react";

function useFetchData(fetchFunc, request) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchFunc(request).then((result) => {
      const [Response, data] = result;
      if (Response.status === 200) {
        setData(data);
        setIsLoading(false);
        setError(false);
      } else {
        setError(Response.status);
        setIsLoading(false);
      }
    });
  }, []);

  return [data, isLoading, error];
}

export default useFetchData;
