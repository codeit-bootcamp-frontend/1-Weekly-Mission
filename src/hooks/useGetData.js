import { useState, useCallback, useEffect } from "react";
import { getResponse } from "../api";

export const useGetData = (domain) => {
  const [data, setData] = useState(null);

  const getData = useCallback(async () => {
    const result = await getResponse(`${domain}`);
    if (!result) return;
    setData(result);
  }, [domain]);

  useEffect(() => getData(), [getData]);

  return data;
};

export default useGetData;
