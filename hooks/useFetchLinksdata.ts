import { useState, useEffect } from "react";

function useFetchLinksData(fetchFunc, targetArr) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (targetArr.length < 1) {
      return;
    }
    setIsLoading(true);
    fetchFunc(targetArr).then((result) => {
      setData(result);
    });
  }, [targetArr]);

  return [data, isLoading];
}

export default useFetchLinksData;
