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
      // if조건 주고 안주고 엄청 차이남 why
      setData(result);
    });
    // fetchfunc이라구 인자를 주면은 안됨
  }, [targetArr]);

  return [data, isLoading];
}

export default useFetchLinksData;
