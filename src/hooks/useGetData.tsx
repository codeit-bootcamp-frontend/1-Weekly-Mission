import { useState, useCallback, useEffect } from "react";
import { PathType, getResponse } from "../api";

interface UseGetDataProps {
  path: PathType;
  query?: string;
}

export const useGetData = ({ path, query = "" }: UseGetDataProps) => {
  const [data, setData] = useState<any>(null);

  const getData = useCallback(async () => {
    const result = await getResponse(path, query);
    if (!result) setData(null);
    setData(result);
  }, [path, query]);

  useEffect(() => {
    getData();
  }, [getData]);

  return data;
};

export default useGetData;
