import { useState, useCallback, useEffect } from "react";
import { getResponse } from "../api";

export const useGetData = (pageType, dataType, query = "") => {
  const [data, setData] = useState(null);

  const getData = useCallback(async () => {
    const result = await getResponse(pageType, dataType, query);
    if (!result) setData(null);
    setData(result);
  }, [pageType, dataType, query]);

  useEffect(() => {
    getData();
  }, [getData]);

  return data;
};

export default useGetData;
