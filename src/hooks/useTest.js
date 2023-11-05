import { useState, useEffect } from "react";

function useTest(fetchFunc, request = []) {
  const [data, setData] = useState([]);
  // true부터 넣는게 맞나? false부터 넣는게 맞나? 이거좀 헷갈린다..ㅎ
  const [isLoading, setIsLoading] = useState(true);
  // cleanup 사용안하면은 안된다
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      // console.log(request); 얘가 안 직힘..
      fetchFunc(...request).then((data) => {
        setData(data);
        setIsLoading(false);
      });
    }

    return () => {
      isMounted = false;
    };
  }, [...request]);

  return [data, isLoading];
}

export default useTest;
